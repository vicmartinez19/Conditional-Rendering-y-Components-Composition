import React, { useState } from 'react';
import InputNumber from './InputNumber.jsx';
import Message from './Message.jsx';
import RestartButton from './RestartButton.jsx';
import './Game.css';

function Game() {
  const [secreto, setSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [vidas, setVidas] = useState(7);
  const [historial, setHistorial] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [ganado, setGanado] = useState(false);
  const agotado = vidas <= 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputVal, 10);
    if (isNaN(num) || ganado || agotado) return;

    setHistorial([num, ...historial]);
    if (num === secreto) {
      setGanado(true);
    } else {
      setVidas(prev => prev - 1);
    }
    setInputVal('');
  };

  const handleRestart = () => {
    setSecreto(Math.floor(Math.random() * 100) + 1);
    setVidas(7);
    setHistorial([]);
    setGanado(false);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">🎯 Adivina el Número</h2>
      <div className="stats-bar">
        <span>Vidas restantes: {"❤️".repeat(Math.max(0, vidas))}</span>
      </div>
      <InputNumber value={inputVal} onChange={(e) => setInputVal(e.target.value)} onSubmit={handleSubmit} disabled={ganado || agotado} />
      <Message intento={historial[0] || null} secreto={secreto} ganado={ganado} agotado={agotado} />
      {(ganado || agotado) && <RestartButton onRestart={handleRestart} />}
    </div>
  );
}

export default Game;