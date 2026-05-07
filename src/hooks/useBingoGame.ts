import { useState, useCallback, useMemo, useEffect } from 'react';
import type { BingoSquareData, BingoLine, GameState, GameTheme } from '../types';
import {
  generateBoard,
  toggleSquare,
  checkBingo,
  getWinningSquareIds,
} from '../utils/bingoLogic';

export interface BingoGameState {
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
  winningSquareIds: Set<number>;
  showBingoModal: boolean;
}

export interface BingoGameActions {
  startGame: (theme?: GameTheme) => void;
  handleSquareClick: (squareId: number) => void;
  resetGame: () => void;
  dismissModal: () => void;
  setTheme: (theme: GameTheme) => void;
}

const STORAGE_KEY = 'bingo-game-state';
const STORAGE_VERSION = 1;
const THEME_STORAGE_KEY = 'bingo-game-theme';

interface StoredGameData {
  version: number;
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
}

function validateStoredData(data: unknown): data is StoredGameData {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  if (obj.version !== STORAGE_VERSION) {
    return false;
  }
  
  if (typeof obj.gameState !== 'string' || !['start', 'playing', 'bingo'].includes(obj.gameState)) {
    return false;
  }
  
  if (!Array.isArray(obj.board) || (obj.board.length !== 0 && obj.board.length !== 25)) {
    return false;
  }
  
  const validSquares = obj.board.every((sq: unknown) => {
    if (!sq || typeof sq !== 'object') return false;
    const square = sq as Record<string, unknown>;
    return (
      typeof square.id === 'number' &&
      typeof square.text === 'string' &&
      typeof square.isMarked === 'boolean' &&
      typeof square.isFreeSpace === 'boolean'
    );
  });
  
  if (!validSquares) {
    return false;
  }
  
  if (obj.winningLine !== null) {
    if (typeof obj.winningLine !== 'object') {
      return false;
    }
    const line = obj.winningLine as Record<string, unknown>;
    if (
      typeof line.type !== 'string' ||
      !['row', 'column', 'diagonal'].includes(line.type) ||
      typeof line.index !== 'number' ||
      !Array.isArray(line.squares)
    ) {
      return false;
    }
  }
  
  return true;
}

function loadGameState(): Pick<BingoGameState, 'gameState' | 'board' | 'winningLine'> | null {
  // SSR guard
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return null;
    }

    const parsed = JSON.parse(saved);
    
    if (validateStoredData(parsed)) {
      return {
        gameState: parsed.gameState,
        board: parsed.board,
        winningLine: parsed.winningLine,
      };
    } else {
      console.warn('Invalid game state data in localStorage, clearing...');
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.warn('Failed to load game state:', error);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return null;
}

function saveGameState(gameState: GameState, board: BingoSquareData[], winningLine: BingoLine | null): void {
  // SSR guard
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const data: StoredGameData = {
      version: STORAGE_VERSION,
      gameState,
      board,
      winningLine,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save game state:', error);
  }
}

function loadTheme(): GameTheme {
  if (typeof window === 'undefined') {
    return 'general';
  }
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'general' || saved === 'fandom') {
      return saved;
    }
  } catch (error) {
    console.warn('Failed to load theme:', error);
  }
  return 'general';
}

function saveTheme(theme: GameTheme): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme:', error);
  }
}

export function useBingoGame(): BingoGameState & BingoGameActions {
  const loadedState = useMemo(() => loadGameState(), []);
  const loadedTheme = useMemo(() => loadTheme(), []);

  const [gameState, setGameState] = useState<GameState>(
    () => loadedState?.gameState || 'start'
  );
  const [board, setBoard] = useState<BingoSquareData[]>(
    () => loadedState?.board || []
  );
  const [winningLine, setWinningLine] = useState<BingoLine | null>(
    () => loadedState?.winningLine || null
  );
  const [showBingoModal, setShowBingoModal] = useState(false);
  const [theme, setThemeState] = useState<GameTheme>(() => loadedTheme);

  const winningSquareIds = useMemo(
    () => getWinningSquareIds(winningLine),
    [winningLine]
  );

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    saveGameState(gameState, board, winningLine);
  }, [gameState, board, winningLine]);

  const startGame = useCallback((selectedTheme?: GameTheme) => {
    const themeToUse = selectedTheme || theme;
    if (selectedTheme) {
      setThemeState(selectedTheme);
      saveTheme(selectedTheme);
    }
    setBoard(generateBoard(themeToUse));
    setWinningLine(null);
    setGameState('playing');
  }, [theme]);

  const handleSquareClick = useCallback((squareId: number) => {
    setBoard((currentBoard) => {
      const newBoard = toggleSquare(currentBoard, squareId);
      
      // Check for bingo after toggling
      const bingo = checkBingo(newBoard);
      if (bingo && !winningLine) {
        // Schedule state updates to avoid synchronous setState in effect
        queueMicrotask(() => {
          setWinningLine(bingo);
          setGameState('bingo');
          setShowBingoModal(true);
        });
      }
      
      return newBoard;
    });
  }, [winningLine]);

  const resetGame = useCallback(() => {
    setGameState('start');
    setBoard([]);
    setWinningLine(null);
    setShowBingoModal(false);
  }, []);

  const dismissModal = useCallback(() => {
    setShowBingoModal(false);
  }, []);

  const setTheme = useCallback((newTheme: GameTheme) => {
    setThemeState(newTheme);
    saveTheme(newTheme);
  }, []);

  return {
    gameState,
    board,
    winningLine,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
    setTheme,
  };
}
