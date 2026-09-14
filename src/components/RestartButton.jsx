import React from 'react';

function RestartButton({ onRestart, texto = "🔄 Jugar de Nuevo" }) {
  return (
    <button onClick={onRestart} className="restart-btn">
      {texto}
    </button>
  );
}

export default RestartButton;