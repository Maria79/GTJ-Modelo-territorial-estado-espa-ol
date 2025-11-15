"use client";

import { useState, useEffect } from "react";
import { tests } from "../../data/tests";
import TestQuestion from "../components/TestQuestion";
import ProgressBar from "../components/ProgressBar";
import TopicNavigation from "../components/TopicNavigation";

export default function TestsPage() {
  const [activeTopic, setActiveTopic] = useState("all");
  const [respuestas, setRespuestas] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [tiempoRestante, setTiempoRestante] = useState(7200); // 2 horas

  const filteredTests =
    activeTopic === "all" ? tests : tests.filter((t) => t.tema === activeTopic);

  const respuestasCount = Object.keys(respuestas).length;

  const correctasCount = Object.values(respuestas).filter(
    (resp, index) => resp === filteredTests[index]?.respuestaCorrecta
  ).length;

  // Temporizador
  useEffect(() => {
    if (tiempoRestante > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTiempoRestante(tiempoRestante - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (tiempoRestante === 0 && !showResults) {
      setShowResults(true);
    }
  }, [tiempoRestante, showResults]);

  const handleAnswer = (preguntaId, respuestaIndex) => {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: respuestaIndex,
    }));
  };

  const handleFinalizar = () => {
    const unanswered = filteredTests.map((p) => respuestas[p.id] === undefined);

    setUnansweredQuestions(unanswered);
    setShowResults(true);
  };

  const handleReiniciar = () => {
    setRespuestas({});
    setShowResults(false);
    setTiempoRestante(7200);
    setUnansweredQuestions([]);
  };

  const formatTime = (seconds) => {
    const horas = Math.floor(seconds / 3600);
    const minutos = Math.floor((seconds % 3600) / 60);
    const segundos = seconds % 60;
    return `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <header>
        <h1>Tests de Evaluación</h1>
        <p className="subtitle">
          Modelo Territorial del Estado Español - 100 Preguntas
        </p>
      </header>

      <div className="container">
        {/* Panel de control */}
        <div className="test-controls">
          <div className="test-stats">
            <div className="stat">
              <span className="stat-value">
                {respuestasCount}/{filteredTests.length}
              </span>
              <span className="stat-label">Respondidas</span>
            </div>

            <div className="stat">
              <span className="stat-value">{correctasCount}</span>
              <span className="stat-label">Correctas</span>
            </div>

            <div className="stat">
              <span className="stat-value">
                {respuestasCount > 0
                  ? Math.round((correctasCount / respuestasCount) * 100)
                  : 0}
                %
              </span>
              <span className="stat-label">Precisión</span>
            </div>

            <div className="stat">
              <span className="stat-value">{formatTime(tiempoRestante)}</span>
              <span className="stat-label">Tiempo</span>
            </div>
          </div>

          <div className="test-actions">
            {!showResults ? (
              <button
                className="finish-btn"
                onClick={handleFinalizar}
                disabled={respuestasCount === 0}
              >
                Finalizar Test
              </button>
            ) : (
              <button className="restart-btn" onClick={handleReiniciar}>
                Reiniciar Test
              </button>
            )}
          </div>
        </div>

        {/* Barra de progreso */}
        <ProgressBar
          estudiadas={respuestasCount}
          total={filteredTests.length}
        />

        {/* Navegación por temas */}
        <TopicNavigation
          activeTopic={activeTopic}
          onTopicChange={setActiveTopic}
        />

        {/* Lista de preguntas */}
        <div className="tests-container">
          {filteredTests.map((pregunta, index) => (
            <TestQuestion
              key={pregunta.id}
              pregunta={pregunta}
              onAnswer={handleAnswer}
              showResults={showResults}
              isUnanswered={showResults && unansweredQuestions[index]}
            />
          ))}
        </div>

        {/* Resultados finales */}
        {showResults && (
          <div className="final-results">
            <h2>Resultados Finales</h2>
            <div className="results-grid">
              <div className="result-card correct">
                <span className="result-number">{correctasCount}</span>
                <span className="result-label">Correctas</span>
              </div>

              <div className="result-card incorrect">
                <span className="result-number">
                  {respuestasCount - correctasCount}
                </span>
                <span className="result-label">Incorrectas</span>
              </div>

              <div className="result-card total">
                <span className="result-number">
                  {filteredTests.length - respuestasCount}
                </span>
                <span className="result-label">Sin responder</span>
              </div>

              <div className="result-card percentage">
                <span className="result-number">
                  {respuestasCount > 0
                    ? Math.round((correctasCount / respuestasCount) * 100)
                    : 0}
                  %
                </span>
                <span className="result-label">Precisión</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
