import type { Metadata } from "next";
import "./globals.css"; // Esto es importante para que Tailwind funcione

export const metadata: Metadata = {
  title: "Jonathan Baltodano | Enlaces",
  description: "Explora mis proyectos de ingeniería de software, mi portafolio profesional y mis ensayos en Substack.",
  keywords: ["Jonathan Baltodano", "Desarrollador", "Ingeniero en Sistemas", "Escritor", "Substack", "Portafolio", "Nicaragua"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* El fondo base lo dejamos en este hueso claro por si alguna pantalla carga lento */}
      <body className="bg-[#F9F8F6] antialiased">
        {children}
      </body>
    </html>
  );
}