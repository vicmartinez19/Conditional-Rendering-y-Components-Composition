import React from 'react';

function DifficultySelector({ dificultadActual, onSelect, disabled }) {
  const opciones = [
    { id: 'facil', label: 'Fácil (1-50)', max: 50, vidas: 10 },
    { id: 'medio', label: 'Normal (1-100)', max: 100, vidas: 7 },
    { id: 'dificil', label: 'Difícil (1-200)', max: 200, vidas: 5 },
  ];

  return (
    <div className="difficulty-bar">
      {opciones.map((opt) => (
        <button
          key={opt.id}
          className={`diff-btn ${dificultadActual === opt.id ? 'active' : ''}`}
          onClick={() => onSelect(opt)}
          disabled={disabled}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default DifficultySelector;