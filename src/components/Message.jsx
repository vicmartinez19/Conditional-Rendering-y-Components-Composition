import React from 'react';

/**
 * Componente Message (Renderizado Condicional)
 * Muestra dinámicamente diferentes tipos de mensajes según el estado del juego:
 * - Victoria (éxito)
 * - Derrota (límite de intentos alcanzado)
 * - Pistas (número más alto o más bajo)
 * - Instrucción inicial
 */
function Message({ tipo, texto, intentosRestantes, numeroSecreto }) {
  if (tipo === 'win') {
    return (
      <div className="message-box msg-win">
        <h3>🎉 ¡Excelente! ¡Adivinaste el número!</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
          El número secreto era efectivamente <strong>{numeroSecreto}</strong>.
        </p>
      </div>
    );
  }

  if (tipo === 'lose') {
    return (
      <div className="message-box msg-lose">
        <h3>💥 ¡Fin del Juego!</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
          Te quedaste sin vidas. El número secreto era <strong>{numeroSecreto}</strong>.
        </p>
      </div>
    );
  }

  if (tipo === 'higher') {
    return (
      <div className="message-box msg-hint-high">
        📈 ¡Pista! El número secreto es <strong>MAYOR</strong> que tu intento.
      </div>
    );
  }

  if (tipo === 'lower') {
    return (
      <div className="message-box msg-hint-low">
        📉 ¡Pista! El número secreto es <strong>MENOR</strong> que tu intento.
      </div>
    );
  }

  return (
    <div className="message-box msg-info">
      💡 {texto || "Ingresa un número para comenzar a jugar."}
    </div>
  );
}

export default Message;