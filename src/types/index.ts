/** Domain types for the Bingo game */

export interface BingoSquareData {
  id: number;
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
}

export interface BingoLine {
  type: 'row' | 'column' | 'diagonal' | 'corners';
  index: number;
  squares: number[];
}

export type GameState = 'start' | 'playing' | 'bingo';

export type GameTheme = 'general' | 'fandom';

export interface ThemeConfig {
  id: GameTheme;
  label: string;
  description: string;
  emoji: string;
}
