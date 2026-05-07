import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border rounded-3xl transition-all duration-150 select-none min-h-[70px] text-[0.78rem] leading-tight overflow-hidden';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-fuchsia-500/20 border-fuchsia-400/70 text-fuchsia-100 shadow-[0_0_24px_rgba(236,72,153,0.22)]'
      : 'bg-cyan-500/15 border-cyan-400/50 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.16)]'
    : 'bg-slate-950/80 border-slate-700 text-slate-100 hover:border-cyan-400/60 hover:bg-slate-900/90 active:bg-slate-800/95';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-slate-900/90 border-lime-400/70 text-lime-200 font-semibold'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto px-1">{square.text}</span>
      {square.isFreeSpace && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-lime-400/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-lime-200">
          free
        </span>
      )}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-cyan-200 text-[10px] font-bold">✓</span>
      )}
    </button>
  );
}
