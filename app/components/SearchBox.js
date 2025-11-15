'use client';

export default function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Buscar en las fichas..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}