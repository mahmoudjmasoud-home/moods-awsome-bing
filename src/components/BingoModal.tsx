interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.16),_rgba(15,23,42,0.94)_45%)] flex items-center justify-center p-4 z-50">
      <div className="glass-card border-cyan-400/20 rounded-[36px] p-7 max-w-xs w-full text-center shadow-[0_30px_100px_rgba(34,211,238,0.18)] animate-pulse">
        <div className="text-[3.25rem] leading-none mb-3 text-cyan-200">🎉</div>
        <h2 className="text-4xl font-extrabold text-white mb-2 glow-text">BINGO!</h2>
        <p className="text-sm text-slate-300 mb-6">You completed a neon line. Keep the energy going!</p>

        <button
          onClick={onDismiss}
          className="w-full rounded-[24px] border border-cyan-400/40 bg-cyan-500/15 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/25"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
