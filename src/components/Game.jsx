import React, { useState } from 'react';
import InputNumber from './InputNumber.jsx';
import RestartButton from './RestartButton.jsx';
import './Game.css';

function Game() {
  const [secreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [inputVal, setInputVal] = useState('');
  const [intentos, setIntentos] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    setIntentos(prev => prev + 1);
    setInputVal('');
  };

  return (
    <div className="game-container">
      <h2 className="game-title">🎯 Adivina el Número Secreto</h2>
      <p className="game-subtitle">Adivina el número del 1 al 100</p>
      <InputNumber
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSubmit={handleSubmit}
        disabled={false}
      />
      <div style={{ marginTop: '16px', color: '#94a3b8' }}>Intentos realizados: {intentos}</div>
      <RestartButton onRestart={() => window.location.reload()} />
    </div>
  );
}

export default Game;