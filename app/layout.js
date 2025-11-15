import "../style/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Fichas de Estudio - Modelo Territorial Español",
  description:
    "Aplicación interactiva para estudiar el modelo territorial del Estado español",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav className="main-nav">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              Fichas de Estudio
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">
                Fichas
              </Link>
              <Link href="/tests" className="nav-link">
                Tests
              </Link>
              <Link href="/desarrollo_test" className="nav-link">
                Test de Desarrollo
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
