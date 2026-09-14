import React from 'react';

/**
 * Componente modular InputNumber
 * Encapsula la captura del número del usuario y el botón de disparo.
 */
function InputNumber({ valor, onChange, onSubmit, disabled, min = 1, max = 100 }) {
  return (
    <form onSubmit={onSubmit} className="input-number-form">
      <input
        type="number"
        className="input-number-field"
        value={valor}
        onChange={onChange}
        min={min}
        max={max}
        placeholder="¿Qué número?"
        disabled={disabled}
        autoFocus
      />
      <button type="submit" className="btn-guess" disabled={disabled || !valor}>
        Adivinar 🎯
      </button>
    </form>
  );
}

export default InputNumber;