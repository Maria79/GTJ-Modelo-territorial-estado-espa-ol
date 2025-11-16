import "../style/globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Fichas de Estudio - Modelo Territorial Español",
  description:
    "Aplicación interactiva para estudiar el modelo territorial del Estado español",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
