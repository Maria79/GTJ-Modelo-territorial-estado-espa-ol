// app/desarrollo_test/page.js
"use client";

import "../../style/Ejercicios.css";
import { useState } from "react";
import { desarrolloTest } from "../../data/desarrolloTest";
import EjercicioCard from "../components/Ejercicios/EjercicioCard";
import GruposNavigation from "../components/Ejercicios/GruposNavigation";

export default function DesarrolloTestPage() {
  const [grupoActivo, setGrupoActivo] = useState("grupo1");

  const grupos = [
    {
      id: "grupo1",
      nombre: "Ejercicios 1-7",
      data: desarrolloTest.ejercicios.grupo1,
    },
    {
      id: "grupo2",
      nombre: "Ejercicios 8-17",
      data: desarrolloTest.ejercicios.grupo2,
    },
    {
      id: "grupo3",
      nombre: "Ejercicios 18-27",
      data: desarrolloTest.ejercicios.grupo3,
    },
    {
      id: "grupo4",
      nombre: "Ejercicios 28-37",
      data: desarrolloTest.ejercicios.grupo4,
    },
  ];

  const grupoActual = grupos.find((grupo) => grupo.id === grupoActivo)?.data;

  return (
    <>
      <header>
        <h1>Test de Desarrollo - Modelo Territorial</h1>
        <p className="subtitle">
          Ejercicios prácticos sobre administraciones y competencias
          territoriales
        </p>
      </header>

      <div className="container">
        <GruposNavigation
          grupos={grupos}
          grupoActivo={grupoActivo}
          onGrupoChange={setGrupoActivo}
        />

        {grupoActual && (
          <div className="grupo-ejercicios">
            <h2 className="section-title">{grupoActual.titulo}</h2>

            <div className="ejercicios-container">
              {grupoActual.ejercicios.map((ejercicio) => (
                <EjercicioCard key={ejercicio.id} ejercicio={ejercicio} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .ejercicios-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .grupo-ejercicios {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
}
