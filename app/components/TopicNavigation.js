"use client";

export default function TopicNavigation({ activeTopic, onTopicChange }) {
  const topics = [
    { id: "all", label: "Todos los temas" },
    { id: "modelos", label: "Modelos Territoriales" },
    { id: "autonomias", label: "Comunidades Autónomas" },
    { id: "provincias", label: "Provincias" },
    { id: "municipios", label: "Municipios" },
    { id: "conceptos", label: "Conceptos Clave" },
  ];

  return (
    <div className="topics-nav">
      {topics.map((topic) => (
        <button
          key={topic.id}
          className={`topic-btn ${activeTopic === topic.id ? "active" : ""}`}
          onClick={() => onTopicChange(topic.id)}
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}
