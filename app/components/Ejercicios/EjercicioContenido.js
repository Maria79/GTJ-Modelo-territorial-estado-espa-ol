// components/Ejercicios/EjercicioContenido.js
"use client";

export default function EjercicioContenido({ ejercicio }) {
  // Renderizar según el tipo de ejercicio
  const renderContenido = () => {
    // Ejercicio con esquema/contenido
    if (ejercicio.contenido) {
      return (
        <div className="ejercicio-contenido">
          <pre className="esquema-contenido">{ejercicio.contenido}</pre>
        </div>
      );
    }

    // Ejercicio con tabla
    if (ejercicio.tabla) {
      return (
        <div className="ejercicio-tabla">
          <table className="tabla-ejercicio">
            <thead>
              <tr>
                {ejercicio.tabla.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ejercicio.tabla.filas.map((fila, index) => (
                <tr key={index}>
                  {fila.map((celda, celdaIndex) => (
                    <td key={celdaIndex}>
                      {celda || (
                        <input
                          type="text"
                          placeholder="Escribe aquí..."
                          className="input-tabla"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Ejercicio con preguntas V/F
    if (ejercicio.preguntas && ejercicio.preguntas[0]?.enunciado) {
      return (
        <div className="ejercicio-preguntas-vf">
          {ejercicio.preguntas.map((pregunta, index) => (
            <div key={index} className="pregunta-vf">
              <div className="pregunta-enunciado">
                <strong>
                  {index + 1}. {pregunta.enunciado}
                </strong>
              </div>
              <div className="opciones-vf">
                <label className="opcion-vf">
                  <input type="radio" name={`pregunta-${index}`} value="true" />
                  Verdadero
                </label>
                <label className="opcion-vf">
                  <input
                    type="radio"
                    name={`pregunta-${index}`}
                    value="false"
                  />
                  Falso
                </label>
              </div>
              <textarea
                placeholder="Justificación..."
                className="justificacion-textarea"
                rows="3"
              />
            </div>
          ))}
        </div>
      );
    }

    // Ejercicio con preguntas normales
    if (ejercicio.preguntas && typeof ejercicio.preguntas[0] === "string") {
      return (
        <div className="ejercicio-preguntas">
          {ejercicio.preguntas.map((pregunta, index) => (
            <div key={index} className="pregunta-normal">
              <p>
                <strong>
                  {index + 1}. {pregunta}
                </strong>
              </p>
              <textarea
                placeholder="Escribe tu respuesta aquí..."
                className="respuesta-textarea"
                rows="4"
              />
            </div>
          ))}
        </div>
      );
    }

    // Ejercicio con conceptos
    if (ejercicio.conceptos) {
      return (
        <div className="ejercicio-conceptos">
          {ejercicio.conceptos.map((concepto, index) => (
            <div key={index} className="concepto-item">
              <h4>{concepto.termino}</h4>
              <textarea
                placeholder="Definición..."
                className="definicion-textarea"
                rows="3"
              />
              <p className="ejemplo-label">{concepto.ejemplo}</p>
              <textarea
                placeholder="Ejemplo..."
                className="ejemplo-textarea"
                rows="2"
              />
            </div>
          ))}
        </div>
      );
    }

    // Ejercicio con casos prácticos
    if (ejercicio.casos) {
      return (
        <div className="ejercicio-casos">
          {ejercicio.casos.map((caso, index) => (
            <div key={index} className="caso-item">
              <p>
                <strong>
                  {index + 1}. {caso.situacion || caso.problema}
                </strong>
              </p>
              <input
                type="text"
                placeholder={
                  caso.competencia
                    ? "Competencia..."
                    : caso.respuesta
                    ? "Respuesta..."
                    : caso.principio
                    ? "Principio..."
                    : caso.administracion
                    ? "Administración..."
                    : "Respuesta..."
                }
                className="input-caso"
              />
            </div>
          ))}
        </div>
      );
    }

    // Ejercicio con obras/financiación
    if (ejercicio.obras) {
      return (
        <div className="ejercicio-obras">
          {ejercicio.obras.map((obra, index) => (
            <div key={index} className="obra-item">
              <p>
                <strong>
                  {index + 1}. {obra.obra}
                </strong>
              </p>
              <input
                type="text"
                placeholder="Fuente de financiación..."
                className="input-financiacion"
              />
            </div>
          ))}
        </div>
      );
    }

    // Ejercicio con noticia
    if (ejercicio.noticia) {
      return (
        <div className="ejercicio-noticia">
          <blockquote>{ejercicio.noticia}</blockquote>
          {ejercicio.preguntas &&
            ejercicio.preguntas.map((pregunta, index) => (
              <div key={index} className="pregunta-noticia">
                <p>
                  <strong>
                    {index + 1}. {pregunta}
                  </strong>
                </p>
                <textarea
                  placeholder="Respuesta..."
                  className="respuesta-textarea"
                  rows="3"
                />
              </div>
            ))}
        </div>
      );
    }

    return <p>Contenido del ejercicio no disponible.</p>;
  };

  return (
    <div className="ejercicio-contenido-completo">
      {ejercicio.instrucciones && (
        <div className="instrucciones-principales">
          <h4>Instrucciones:</h4>
          <p>{ejercicio.instrucciones}</p>
        </div>
      )}

      {ejercicio.situacion && (
        <div className="situacion-principal">
          <h4>Situación:</h4>
          <p>{ejercicio.situacion}</p>
        </div>
      )}

      {renderContenido()}
    </div>
  );
}
