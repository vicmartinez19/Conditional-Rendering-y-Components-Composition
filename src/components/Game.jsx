import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber.jsx'
import Message from './Message.jsx'
import RestartButton from './RestartButton.jsx'
import DifficultySelector from './DifficultySelector.jsx'
import './Game.css';

function generarNumero(max) {
  return Math.floor(Math.random() * max) + 1;
}

function Game() {
  const [dificultad, setDificultad] = useState({ id: 'medio', max: 100, vidas: 7 });
  const [numeroSecreto, setNumeroSecreto] = useState(() => generarNumero(100));
  const [inputValor, setInputValor] = useState('');
  const [estadoJuego, setEstadoJuego] = useState('jugando'); // 'jugando', 'win', 'lose'
  const [tipoMensaje, setTipoMensaje] = useState('info');
  const [mensajeTexto, setMensajeTexto] = useState('Adivina un número entre 1 y 100');
  const [intentosRestantes, setIntentosRestantes] = useState(7);
  const [historial, setHistorial] = useState([]);
  const [recordVictorias, setRecordVictorias] = useState(() => {
    return Number(localStorage.getItem('adivina_record_victorias')) || 0;
  });

  const reiniciarJuego = (nuevaDif = dificultad) => {
    const nuevoNum = generarNumero(nuevaDif.max);
    setNumeroSecreto(nuevoNum);
    setInputValor('');
    setEstadoJuego('jugando');
    setTipoMensaje('info');
    setMensajeTexto(`Adivina un número entre 1 y ${nuevaDif.max}`);
    setIntentosRestantes(nuevaDif.vidas);
    setHistorial([]);
    console.log(`[DEBUG] Número secreto generado: ${nuevoNum}`);
  };

  const cambiarDificultad = (nuevaDif) => {
    setDificultad(nuevaDif);
    reiniciarJuego(nuevaDif);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    const intento = parseInt(inputValor, 10);

    if (isNaN(intento) || intento < 1 || intento > dificultad.max) {
      setTipoMensaje('info');
      setMensajeTexto(`Por favor ingresa un número válido entre 1 y ${dificultad.max}.`);
      return;
    }

    const vidasRestantes = intentosRestantes - 1;
    setIntentosRestantes(vidasRestantes);

    const nuevoHistorial = [{ intento, id: Date.now() }, ...historial];
    setHistorial(nuevoHistorial);

    if (intento === numeroSecreto) {
      setEstadoJuego('win');
      setTipoMensaje('win');
      const nuevoRecord = recordVictorias + 1;
      setRecordVictorias(nuevoRecord);
      localStorage.setItem('adivina_record_victorias', nuevoRecord.toString());
    } else if (vidasRestantes === 0) {
      setEstadoJuego('lose');
      setTipoMensaje('lose');
    } else if (intento < numeroSecreto) {
      setTipoMensaje('higher');
    } else {
      setTipoMensaje('lower');
    }

    setInputValor('');
  };

  // Renderizado condicional de vidas con iconos de corazón
  const renderVidas = () => {
    const vidas = [];
    for (let i = 0; i < dificultad.vidas; i++) {
      vidas.push(
        <span key={i} style={{ opacity: i < intentosRestantes ? 1 : 0.25, transition: 'opacity 0.3s' }}>
          ❤️
        </span>
      );
    }
    return vidas;
  };

  return (
    <div className="game-container">
      <h2 style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '8px' }}>
        🎲 Adivina el Número
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>
        Composición de componentes y renderizado condicional reactivo.
      </p>

      <DifficultySelector
        dificultadActual={dificultad.id}
        onSelect={cambiarDificultad}
        disabled={historial.length > 0 && estadoJuego === 'jugando'}
      />

      <div className="lives-container" title={`${intentosRestantes} vidas restantes`}>
        {renderVidas()}
      </div>

      <Message
        tipo={tipoMensaje}
        texto={mensajeTexto}
        intentosRestantes={intentosRestantes}
        numeroSecreto={numeroSecreto}
      />

      {estadoJuego === 'jugando' ? (
        <InputNumber
          valor={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
          onSubmit={handleGuess}
          disabled={estadoJuego !== 'jugando'}
          min={1}
          max={dificultad.max}
        />
      ) : (
        <RestartButton onRestart={() => reiniciarJuego(dificultad)} />
      )}

      {historial.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '12px' }}>
            <span>Historial de intentos ({historial.length}):</span>
            <span>Récord victorias: {recordVictorias} 🏆</span>
          </div>
          <div className="history-chips">
            {historial.map((item, idx) => (
              <span key={item.id} className="chip-attempt">
                #{historial.length - idx}: <strong>{item.intento}</strong>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;