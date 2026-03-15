import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evaluación de desempeño',
  description: 'Plataforma de performance para RRHH y managers'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES">
      <body>
        <main className="mx-auto max-w-6xl p-6">{children}</main>
      </body>
    </html>
  );
}
