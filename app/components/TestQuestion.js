"use client";

import { useState } from "react";

export default function TestQuestion({
  pregunta,
  onAnswer,
  showResults,
  isUnanswered,
}) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const handleSeleccion = (index) => {
    if (!showResults) {
      setRespuestaSeleccionada(index);
      onAnswer(pregunta.id, index);
    }
  };

  const esCorrecta = (index) => {
    return index === pregunta.respuestaCorrecta;
  };

  const getClaseBoton = (index) => {
    // Antes de finalizar
    if (!showResults) {
      return respuestaSeleccionada === index ? "selected" : "";
    }

    // Si la pregunta NO fue contestada, marcar solo la correcta en gris
    if (showResults && isUnanswered && esCorrecta(index)) {
      return "unanswered-correct";
    }

    // Pregunta contestada normalmente
    if (esCorrecta(index)) return "correct";

    if (respuestaSeleccionada === index && !esCorrecta(index))
      return "incorrect";

    return "";
  };

  return (
    <div className="test-question">
      <h3 className="question-text">
        {pregunta.id}. {pregunta.pregunta}
      </h3>

      <div className="options-container">
        {pregunta.opciones.map((opcion, index) => (
          <button
            key={index}
            className={`option-btn ${getClaseBoton(index)}`}
            onClick={() => handleSeleccion(index)}
            disabled={showResults}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{opcion}</span>
          </button>
        ))}
      </div>

      {showResults && (
        <div className="explanation">
          <strong>Explicación:</strong> {pregunta.explicacion}
        </div>
      )}
    </div>
  );
}
