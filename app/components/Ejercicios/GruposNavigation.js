// components/Ejercicios/GruposNavigation.js
"use client";

export default function GruposNavigation({
  grupos,
  grupoActivo,
  onGrupoChange,
}) {
  return (
    <div className="grupos-navigation">
      {grupos.map((grupo) => (
        <button
          key={grupo.id}
          className={`grupo-btn ${grupoActivo === grupo.id ? "active" : ""}`}
          onClick={() => onGrupoChange(grupo.id)}
        >
          {grupo.nombre}
        </button>
      ))}

      <style jsx>{`
        .grupos-navigation {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .grupo-btn {
          padding: 12px 24px;
          background-color: white;
          border: 2px solid var(--secondary-color);
          border-radius: 30px;
          cursor: pointer;
          transition: var(--transition);
          font-weight: 600;
          color: var(--secondary-color);
          font-size: 0.9rem;
        }

        .grupo-btn:hover {
          background-color: var(--secondary-color);
          color: white;
          transform: translateY(-2px);
        }

        .grupo-btn.active {
          background-color: var(--secondary-color);
          color: white;
        }

        @media (max-width: 768px) {
          .grupos-navigation {
            gap: 0.5rem;
          }

          .grupo-btn {
            padding: 10px 16px;
            font-size: 0.8rem;
            flex: 1;
            min-width: 120px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
