import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_26%),#05070d] text-slate-100">
      <header className="flex items-center justify-between gap-4 px-4 py-5 backdrop-blur-xl glass-panel border border-cyan-400/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)] mx-4 mt-4 rounded-[28px]">
        <button
          onClick={onReset}
          className="rounded-full border border-slate-600/60 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-100"
        >
          ← Back
        </button>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Cyberpunk Bingo</p>
          <h1 className="text-2xl font-extrabold text-white glow-text">Bingo Mixer</h1>
        </div>
        <div className="w-20" />
      </header>

      <div className="mx-4 mt-6 space-y-4">
        <div className="glass-card border-slate-600/40 px-5 py-4 rounded-[28px] text-center shadow-[0_16px_50px_rgba(15,23,42,0.35)]">
          <p className="text-sm text-slate-300">
            Tap a square when you find someone who matches it. Build a neon line and claim BINGO.
          </p>
        </div>

        {hasBingo && (
          <div className="glass-card border-fuchsia-400/20 bg-fuchsia-500/5 px-5 py-3 text-center rounded-[24px] text-fuchsia-100 shadow-[0_16px_60px_rgba(236,72,153,0.16)]">
            <span className="text-sm uppercase tracking-[0.24em] text-fuchsia-200/90">🎉 BINGO</span>
            <p className="mt-1 text-base font-semibold">You got a line!</p>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl glass-panel border-cyan-400/15 p-4 rounded-[36px] shadow-[0_40px_120px_rgba(8,15,33,0.55)]">
          <BingoBoard board={board} winningSquareIds={winningSquareIds} onSquareClick={onSquareClick} />
        </div>
      </div>
    </div>
  );
}
