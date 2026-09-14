# Actividad 5: Juego Adivina el Número (Conditional Rendering y Composición)

## 📌 Descripción del Proyecto
Juego interactivo estructurado bajo la técnica de **Composición de Componentes** y **Renderizado Condicional** en React:
- Componente `Game`: Estado central del número secreto, vidas e historial.
- Componente `InputNumber`: Input controlado y validación numérica.
- Componente `Message`: Renderizado condicional mediante switch/if para mostrar pistas dinámicas (Mayor/Menor), victoria o derrota.
- Componente `RestartButton`: Reinicio del juego.
- Selector de dificultades (Fácil, Normal, Difícil).
- Contador de vidas con iconos interactivos y persistencia del récord de victorias en `localStorage`.
