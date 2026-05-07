import type { GameTheme } from '../types';

interface StartScreenProps {
  onStart: (theme: GameTheme) => void;
}

const THEMES = [
  {
    id: 'general' as GameTheme,
    label: 'General',
    description: 'Classic icebreaker questions',
    emoji: '🎲',
  },
  {
    id: 'fandom' as GameTheme,
    label: 'Fandom',
    description: 'Sci-fi, gaming, books, shows',
    emoji: '🎬',
  },
];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_24%),#05070d] text-slate-100">
      <div className="w-full max-w-2xl space-y-8">
        <div className="glass-card border-cyan-400/20 p-8 rounded-[32px] shadow-[0_24px_80px_rgba(8,15,33,0.55)]">
          <h1 className="text-5xl font-extrabold tracking-tight text-white glow-text mb-3">
            Bingo Mixer
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            A cyberpunk social bingo experience. Find your people, mark the grid, and hit a neon line.
          </p>
        </div>

        <div className="glass-card border-fuchsia-500/15 p-6 rounded-[28px] space-y-4">
          <h2 className="text-xl font-semibold text-white tracking-wide">How to play</h2>
          <ul className="space-y-3 text-slate-300 text-sm leading-6 list-disc list-inside">
            <li>Find people who match the questions in each square.</li>
            <li>Tap a square when you discover a match.</li>
            <li>Get 5 in a row to trigger BINGO.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white tracking-wide px-1">Choose Your Theme</h2>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => onStart(themeOption.id)}
                className="group rounded-[20px] border border-cyan-400/30 bg-cyan-500/10 p-4 transition-all duration-200 hover:border-cyan-300/60 hover:bg-cyan-500/20 active:bg-cyan-500/30"
              >
                <div className="text-3xl mb-2">{themeOption.emoji}</div>
                <div className="text-base font-semibold text-cyan-100">{themeOption.label}</div>
                <div className="text-xs text-slate-400 mt-1">{themeOption.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
