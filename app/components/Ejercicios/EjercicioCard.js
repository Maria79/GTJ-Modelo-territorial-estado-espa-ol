// components/Ejercicios/EjercicioCard.js
"use client";

import { useState } from "react";
import EjercicioContenido from "./EjercicioContenido";

export default function EjercicioCard({ ejercicio }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Contenido resumido para la tarjeta
  const getResumen = () => {
    if (ejercicio.tabla) {
      return `${ejercicio.tabla.filas.length} items para completar`;
    }
    if (ejercicio.preguntas) {
      return `${ejercicio.preguntas.length} preguntas`;
    }
    if (ejercicio.conceptos) {
      return `${ejercicio.conceptos.length} conceptos a definir`;
    }
    if (ejercicio.casos) {
      return `${ejercicio.casos.length} casos prácticos`;
    }
    if (ejercicio.obras) {
      return `${ejercicio.obras.length} casos de financiación`;
    }
    return "Ejercicio práctico";
  };

  return (
    <>
      {/* Tarjeta del ejercicio */}
      <div className="ejercicio-card">
        <div className="ejercicio-header">
          <h3 className="ejercicio-title">{ejercicio.titulo}</h3>
          <span className="ejercicio-badge">Ejercicio {ejercicio.id}</span>
        </div>

        <div className="ejercicio-body">
          <p className="ejercicio-instrucciones">{ejercicio.instrucciones}</p>

          {ejercicio.situacion && (
            <div className="ejercicio-situacion">
              <strong>Situación:</strong> {ejercicio.situacion}
            </div>
          )}

          <div className="ejercicio-resumen">
            <span>{getResumen()}</span>
          </div>
        </div>

        <div className="ejercicio-footer">
          <button className="ver-ejercicio-btn" onClick={handleOpenModal}>
            Resolver Ejercicio
          </button>
        </div>
      </div>

      {/* Modal para el ejercicio completo */}
      {isModalOpen && (
        <div className="card-modal" onClick={handleCloseModal}>
          <div
            className="card-modal-content ejercicio-modal"
            onClick={handleModalClick}
          >
            <div className="card-modal-header">
              <h2 className="card-modal-title">{ejercicio.titulo}</h2>
              <button className="close-modal-btn" onClick={handleCloseModal}>
                ×
              </button>
            </div>

            <div className="card-modal-body ejercicio-modal-body">
              <EjercicioContenido ejercicio={ejercicio} />
            </div>

            <div className="card-modal-footer">
              <button className="flip-btn" onClick={handleCloseModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ejercicio-card {
          background: white;
          border-radius: 10px;
          box-shadow: var(--card-shadow);
          transition: var(--transition);
          border-left: 4px solid var(--secondary-color);
          overflow: hidden;
        }

        .ejercicio-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .ejercicio-header {
          background: var(--primary-color);
          color: white;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .ejercicio-title {
          margin: 0;
          font-size: 1.2rem;
          flex: 1;
        }

        .ejercicio-badge {
          background: var(--accent-color);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .ejercicio-body {
          padding: 1.5rem;
        }

        .ejercicio-instrucciones {
          margin-bottom: 1rem;
          color: #555;
          line-height: 1.5;
        }

        .ejercicio-situacion {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 5px;
          margin-bottom: 1rem;
          border-left: 3px solid var(--secondary-color);
        }

        .ejercicio-resumen {
          color: #666;
          font-size: 0.9rem;
          font-style: italic;
        }

        .ejercicio-footer {
          padding: 1rem 1.5rem;
          background: #f8f9fa;
          border-top: 1px solid #eee;
        }

        .ver-ejercicio-btn {
          background: var(--secondary-color);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition);
          width: 100%;
        }

        .ver-ejercicio-btn:hover {
          background: #2980b9;
        }

        .ejercicio-modal-body {
          max-height: calc(90vh - 140px);
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .ejercicio-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .ejercicio-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </>
  );
}
