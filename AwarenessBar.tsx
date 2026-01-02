
// app/components/AwarenessBar.tsx

export type Mode = 'executive' | 'founder' | 'creator' | 'consultant' | 'learner';
export interface ModeSignature { blend: Record<Mode, number>; primary: Mode; }

/**
 * A tiny heuristic to infer which "mode" dominates based on the user's intent text.
 * Executive is the default; other modes light up if keywords are present.
 */
function inferModeSignature(nlIntent: string): ModeSignature {
  const s = (nlIntent ?? '').toLowerCase();

  // Simple keyword scoring; you can refine these as your prompts evolve.
  const score: Record<Mode, number> = {
    executive: /(brief|board|decision|delegate|kpi|risk|meeting)/.test(s) ? 60 : 10,
    founder: /(launch|product|mvp|fundraise|go[- ]?to[- ]?market|roadmap)/.test(s) ? 60 : 10,
    creator: /(content|viral|brand|hook|audience|script|post|campaign)/.test(s) ? 60 : 10,
    consultant: /(optimize|strategy|framework|root cause|pricing|churn|roi)/.test(s) ? 60 : 10,
    learner: /(learn|teach|study|explain|practice|exam)/.test(s) ? 60 : 10,
  };

  const total = Object.values(score).reduce((a, b) => a + b, 0);
  const blend = Object.fromEntries(
    Object.entries(score).map(([k, v]) => [k, Math.round((v * 100) / total)])
  ) as Record<Mode, number>;
  const primary = Object.entries(blend).sort((a, b) => b[1] - a[1])[0][0] as Mode;

  return { blend, primary };
}

/**
 * AwarenessBar
 * Shows a compact visualization of your Shadow's current mode blend.
 * Pass the current `intent` string, and it will compute the blend.
 */
export default function AwarenessBar({ intent }: { intent: string }) {
  const sig = inferModeSignature(intent);
  const entries = Object.entries(sig.blend).sort((a, b) => b[1] - a[1]);

  return (
    <div className="flex items-center gap-3 text-xs">
      {entries.map(([mode, val]) => (
        <div key={mode} className="flex items-center gap-2">
          <span className="capitalize">{mode}</span>
          <div className="w-24 h-2 bg-gray-700 rounded">
            <div
              className="h-2 bg-blue-500 rounded"
              style={{ width: `${val}%` }}
              title={`${mode}: ${val}%`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
