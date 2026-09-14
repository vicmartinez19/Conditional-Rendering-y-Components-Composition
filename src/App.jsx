import React from 'react';
import Game from './components/Game.jsx'

function App() {
  return (
    <div style={{ padding: '40px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ display: 'inline-block', padding: '6px 14px', background: '#38bdf8', color: '#0f172a', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '12px' }}>
          MÓDULO 4: ACTIVIDAD 5
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px' }}>
          Renderizado Condicional y Composición
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '600px' }}>
          Construcción de interfaces modulares conectando componentes independientes: <code>Game</code>, <code>InputNumber</code>, <code>Message</code> y <code>RestartButton</code>.
        </p>
      </header>

      <Game />

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
        React + Vite + GitHub Pages | Component Composition & Conditional UI
      </footer>
    </div>
  );
}

export default App;