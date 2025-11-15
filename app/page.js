"use client";

import { useState, useMemo, useEffect } from "react";
import { fichas } from "../data/fichas1";
import { conceptos } from "../data/conceptos";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import SearchBox from "./components/SearchBox";
import TopicNavigation from "./components/TopicNavigation";

export default function Home() {
  const [activeTopic, setActiveTopic] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [fichasState, setFichasState] = useState([...fichas, ...conceptos]);

  // Cargar estado guardado desde localStorage
  useEffect(() => {
    const savedFichas = localStorage.getItem("fichas-estudio");
    if (savedFichas) {
      setFichasState(JSON.parse(savedFichas));
    }
  }, []);

  // Guardar estado en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("fichas-estudio", JSON.stringify(fichasState));
  }, [fichasState]);

  const toggleStudied = (id) => {
    setFichasState((prevFichas) =>
      prevFichas.map((ficha) =>
        ficha.id === id ? { ...ficha, estudiado: !ficha.estudiado } : ficha
      )
    );
  };

  const filteredFichas = useMemo(() => {
    let filtered = fichasState;

    // Filtrar por tema
    if (activeTopic !== "all") {
      filtered = filtered.filter((ficha) => ficha.tema === activeTopic);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (ficha) =>
          ficha.titulo.toLowerCase().includes(term) ||
          ficha.contenido.toLowerCase().includes(term) ||
          ficha.detalles.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [fichasState, activeTopic, searchTerm]);

  // Calcular estadísticas
  const estudiadasCount = fichasState.filter((f) => f.estudiado).length;
  const totalCount = fichasState.length;

  const renderCards = (fichasToRender) => {
    if (fichasToRender.length === 0) {
      return (
        <div className="no-results">
          No se encontraron fichas que coincidan con la búsqueda.
        </div>
      );
    }

    return (
      <div className="cards-container">
        {fichasToRender.map((ficha) => (
          <Card key={ficha.id} ficha={ficha} onToggleStudied={toggleStudied} />
        ))}
      </div>
    );
  };

  return (
    <>
      <header>
        <h1>Fichas de Estudio Interactivas</h1>
        <p className="subtitle">
          Modelo Territorial del Estado Español - 1º CFGS Asistencia a la
          Dirección
        </p>
      </header>

      <div className="container">
        <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <TopicNavigation
          activeTopic={activeTopic}
          onTopicChange={setActiveTopic}
        />

        <ProgressBar estudiadas={estudiadasCount} total={totalCount} />

        {activeTopic === "all" && (
          <div className="topic-section active">
            <h2 className="section-title">Todas las Fichas</h2>
            {renderCards(filteredFichas)}
          </div>
        )}

        {["modelos", "autonomias", "provincias", "municipios", "conceptos"].map(
          (topic) => (
            <div
              key={topic}
              className={`topic-section ${
                activeTopic === topic ? "active" : ""
              }`}
              id={`${topic}-cards`}
            >
              <h2 className="section-title">
                {topic === "modelos" && "Modelos Territoriales"}
                {topic === "autonomias" && "Comunidades Autónomas"}
                {topic === "provincias" && "Provincias"}
                {topic === "municipios" && "Municipios"}
                {topic === "conceptos" && "Conceptos Clave"}
              </h2>
              {renderCards(
                filteredFichas.filter((ficha) => ficha.tema === topic)
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
