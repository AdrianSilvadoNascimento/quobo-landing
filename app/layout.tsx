import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistema de Gestão de Estoque Online | Teste Grátis 14 Dias',
  description:
    'Controle estoque, auditorias e conte produtos pelo celular. Sistema simples e acessível para pequenos e médios negócios.',
  icons: {
    icon: [
      { url: '/quobo-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
