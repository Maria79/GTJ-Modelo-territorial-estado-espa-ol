'use client';

import { useState, useEffect } from 'react';

export default function Card({ ficha, onToggleStudied }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para controlar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
      // Prevenir que se abra otro modal
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleOpenModal = (e) => {
    e.stopPropagation();
    // Cerrar cualquier modal abierto antes de abrir uno nuevo
    const existingModals = document.querySelectorAll('.card-modal');
    existingModals.forEach(modal => {
      if (modal.parentElement) {
        modal.parentElement.removeChild(modal);
      }
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleStudied = (e) => {
    e.stopPropagation();
    onToggleStudied(ficha.id);
  };

  // Prevenir que el evento se propague cuando se hace clic dentro del modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Tarjeta normal */}
      <div className="card">
        <div className="card-front">
          <div className="card-header">
            <h3 className="card-title">{ficha.titulo}</h3>
          </div>
          <div className="card-body">
            <div className="card-content">
              <p>{ficha.contenido}</p>
            </div>
          </div>
          <div className="card-footer">
            <button className="flip-btn" onClick={handleOpenModal}>
              Ver detalles
            </button>
            <button 
              className={`details-btn ${ficha.estudiado ? 'studied' : ''}`}
              onClick={handleToggleStudied}
            >
              {ficha.estudiado ? '✓ Estudiado' : 'Marcar como estudiado'}
            </button>
          </div>
        </div>
        <div className="card-back">
          {/* Este contenido ahora se muestra en el modal */}
        </div>
      </div>

      {/* Modal para detalles expandidos */}
      {isModalOpen && (
        <div className="card-modal" onClick={handleCloseModal}>
          <div className="card-modal-content" onClick={handleModalClick}>
            <div className="card-modal-header">
              <h2 className="card-modal-title">{ficha.titulo}</h2>
              <button className="close-modal-btn" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            
            <div className="card-modal-body">
              <div 
                className="card-modal-content-inner"
                dangerouslySetInnerHTML={{ __html: ficha.detalles }}
              />
            </div>
            
            <div className="card-modal-footer">
              <button className="flip-btn" onClick={handleCloseModal}>
                Cerrar
              </button>
              <button 
                className={`details-btn ${ficha.estudiado ? 'studied' : ''}`}
                onClick={handleToggleStudied}
              >
                {ficha.estudiado ? '✓ Estudiado' : 'Marcar como estudiado'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}