
'use client';
import { useState } from 'react';
import AwarenessBar from '../components/AwarenessBar'; // we created this earlier

export default function Dashboard() {
  // Executive default intent; type to see the Awareness bar change
  const [intent, setIntent] = useState('Prepare my board briefing');

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] gap-6 p-6">
      {/* Intent + awareness */}
      <div className="flex items-center gap-4">
        <input
          className="input"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          placeholder="What do you want to do?"
        />
        <AwarenessBar intent={intent} />
      </div>

      {/* 3-column layout aligned with Shadow OS (Context | Shadow View | Brain) */}
      <div className="grid md:grid-cols-[260px_1fr_320px] gap-4">
        {/* Left: Context / Navigation */}
        <aside className="card p-3">
          <h3 className="section-title">Context / Navigation</h3>
          <ul className="text-sm text-gray-300 list-disc pl-5 mt-2">
            <li>Projects</li>
            <li>Meetings</li>
            <li>Documents</li>
          </ul>
        </aside>

        {/* Center: Shadow View */}
        <main className="grid gap-4">
          <div className="card p-3">
            <h3 className="section-title">Morning Executive Brief</h3>
            <p className="text-sm text-gray-300">
              (LLM‑driven Chief‑of‑Staff brief—connect to NVIDIA NIM / Azure later.)
            </p>
          </div>

          <div className="card p-3">
            <h3 className="section-title">Decision Cards</h3>
            <p className="text-sm text-gray-300">
              (Options, pros/cons, recommendation; Approve & Execute / Simulate.)
            </p>
          </div>
        </main>

        {/* Right: Shadow Brain Panel */}
        <aside className="card p-3">
          <h3 className="section-title">Shadow Brain Panel</h3>
          <p className="text-xs text-gray-400">
            Insights, risks, next actions (wired to brief/context soon).
          </p>
        </aside>
      </div>
    </div>
  );
}
