import React, { useState } from 'react';
import InputNumber from './InputNumber.jsx';
import Message from './Message.jsx';
import RestartButton from './RestartButton.jsx';
import './Game.css';

function Game() {
  const [secreto, setSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [inputVal, setInputVal] = useState('');
  const [ultimoIntento, setUltimoIntento] = useState(null);
  const [ganado, setGanado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputVal, 10);
    if (isNaN(num)) return;

    setUltimoIntento(num);
    if (num === secreto) {
      setGanado(true);
    }
    setInputVal('');
  };

  const handleRestart = () => {
    setSecreto(Math.floor(Math.random() * 100) + 1);
    setUltimoIntento(null);
    setGanado(false);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">🎯 Adivina el Número</h2>
      <InputNumber value={inputVal} onChange={(e) => setInputVal(e.target.value)} onSubmit={handleSubmit} disabled={ganado} />
      <Message intento={ultimoIntento} secreto={secreto} ganado={ganado} agotado={false} />
      {ganado && <RestartButton onRestart={handleRestart} />}
    </div>
  );
}

export default Game;