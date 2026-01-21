import { useState } from 'react';
import StellarFlowChart from './components/StellarFlowChart.jsx';
import './App.css';

const tracks = [
  {
    id: 'contract',
    label: 'Contract Developers',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 8l-4 4 4 4M17 8l4 4-4 4M10 19l4-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'frontend',
    label: 'Frontend Developers',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          ry="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 20h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'entrepreneurs',
    label: 'Founders & Investors',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2l4 8-4 4-4-4 4-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 14l-2 8h12l-2-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function App() {
  const [activeTrack, setActiveTrack] = useState('contract');

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Stellar Academy</p>
          <h1>Build your path on Stellar</h1>
          <p className="subtitle">
            Explore a curated, interactive learning path. Click any node to open the resource.
          </p>
        </div>
      </header>

      <main className="app-main">
        <StellarFlowChart track={activeTrack} />

        <aside className="track-panel">
          <p className="panel-title">Choose a track</p>
          <div className="track-buttons">
            {tracks.map((track) => (
              <button
                key={track.id}
                type="button"
                className={`track-button ${
                  activeTrack === track.id ? 'active' : ''
                }`}
                onClick={() => setActiveTrack(track.id)}
              >
                <span className="icon">{track.icon}</span>
                <span className="label">{track.label}</span>
              </button>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
