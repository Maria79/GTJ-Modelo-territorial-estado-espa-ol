"use client";

import { useState } from "react";
import soluciones from "@/data/desarrolloTestSoluciones";

export default function DesarrolloTestRespuestasPage() {
  const [grupoActivo, setGrupoActivo] = useState("grupo1");

  // Agrupamos las soluciones por grupo para mostrarlas en tabs
  const grupos = {
    grupo1: soluciones.filter((s) => s.grupo === "grupo1"),
    grupo2: soluciones.filter((s) => s.grupo === "grupo2"),
    grupo3: soluciones.filter((s) => s.grupo === "grupo3"),
    grupo4: soluciones.filter((s) => s.grupo === "grupo4"),
  };

  const tabs = [
    { id: "grupo1", label: "Ejercicios 1–7" },
    { id: "grupo2", label: "Ejercicios 8–17" },
    { id: "grupo3", label: "Ejercicios 18–27" },
    { id: "grupo4", label: "Ejercicios 28–37" },
  ];

  const grupoActual = grupos[grupoActivo];

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        📘 Respuestas del Test de Desarrollo
      </h1>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setGrupoActivo(tab.id)}
            className={grupoActivo === tab.id ? "tab-active" : "tab"}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENIDO DEL GRUPO */}
      <div className="ejercicios-container">
        {grupoActual.map((item, index) => (
          <div
            key={index}
            className="test-question"
            style={{
              padding: "2rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "white",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                color: "var(--primary-color)",
                marginBottom: "1rem",
                fontSize: "1.3rem",
              }}
            >
              {item.id}. {item.titulo}
            </h2>

            {/* LISTA */}
            {item.tipo === "lista" && (
              <ul style={{ marginLeft: "1.5rem", marginTop: "1rem" }}>
                {item.soluciones.map((sol, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    {sol}
                  </li>
                ))}
              </ul>
            )}

            {/* VERDADERO/FALSO */}
            {item.tipo === "vf" && (
              <div style={{ marginTop: "1rem" }}>
                {item.soluciones.map((sol, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "1rem",
                      padding: "0.8rem",
                      background: "#f7f7f7",
                      borderRadius: "6px",
                    }}
                  >
                    <strong>
                      {sol.numero}. {sol.respuesta}
                    </strong>
                    <p style={{ marginTop: "0.5rem" }}>{sol.argumento}</p>
                  </div>
                ))}
              </div>
            )}

            {/* TABLA */}
            {item.tipo === "tabla" && item.columnas && (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "1rem",
                }}
              >
                <thead>
                  <tr>
                    {item.columnas.map((col, i) => (
                      <th
                        key={i}
                        style={{
                          borderBottom: "2px solid #ccc",
                          padding: "0.7rem",
                          background: "#f0f0f0",
                          textAlign: "left",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {item.filas.map((fila, idx) => (
                    <tr key={idx}>
                      {fila.map((celda, cidx) => (
                        <td
                          key={cidx}
                          style={{
                            padding: "0.7rem",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {celda}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* SUBAPARTADOS */}
            {item.tipo === "subapartados" && (
              <div style={{ marginTop: "1rem" }}>
                {Object.entries(item.soluciones).map(([clave, val], i) => (
                  <div key={i} style={{ marginBottom: "1rem" }}>
                    <strong>{clave.toUpperCase()}.</strong>

                    {Array.isArray(val) ? (
                      <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        {val.map((v, j) => (
                          <li key={j}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ marginTop: "0.3rem" }}>{val}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ESTILOS DE TABS */}
      <style jsx>{`
        .tab {
          padding: 10px 18px;
          border-radius: 20px;
          border: 2px solid var(--secondary-color);
          background: white;
          color: var(--secondary-color);
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .tab:hover {
          background: var(--secondary-color);
          color: white;
        }

        .tab-active {
          padding: 10px 18px;
          border-radius: 20px;
          background: var(--secondary-color);
          color: white;
          border: 2px solid var(--secondary-color);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
