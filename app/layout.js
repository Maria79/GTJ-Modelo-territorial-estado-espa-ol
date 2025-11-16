"use client";

import "../style/globals.css";
import Link from "next/link";
import { useState } from "react";

export const metadata = {
  title: "Fichas de Estudio - Modelo Territorial Español",
  description:
    "Aplicación interactiva para estudiar el modelo territorial del Estado español",
};

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="es">
      <body>
        <nav className="main-nav">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              Fichas de Estudio
            </Link>

            {/* Botón hamburguesa */}
            <button
              className={`hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            {/* Links */}
            <div className={`nav-links ${open ? "open" : ""}`}>
              <Link
                href="/"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Fichas
              </Link>
              <Link
                href="/tests"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Tests
              </Link>
              <Link
                href="/desarrollo_test"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Test de Desarrollo
              </Link>
              <Link
                href="/desarrollo_test_respuestas"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Test de Desarrollo Respuestas
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
