'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] text-gray-400 pt-16 pb-0 overflow-hidden">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
        {/* Brand column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-white font-bold text-xl w-fit transition-all duration-300"
          >
            <span className="relative">
              <Image
                src="/quobo-icon.svg"
                alt="Quobo"
                width={28}
                height={28}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]"
              />
            </span>
            <span className="transition-all duration-300 group-hover:tracking-wider group-hover:text-primary">
              Quobo
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            © {new Date().getFullYear()} Quobo. Todos os direitos reservados.
          </p>

          {/* Social icons row */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://instagram.com/quobo_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a> */}
          </div>
        </div>

        {/* Produto */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Produto</p>
          <ul className="space-y-3">
            <li>
              <a href="/#features" className="text-sm hover:text-white transition-colors duration-200">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="/#pricing" className="text-sm hover:text-white transition-colors duration-200">
                Planos
              </a>
            </li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Empresa</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                Suporte
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Legal</p>
          <ul className="space-y-3">
            <li>
              <Link href="/terms" className="text-sm hover:text-white transition-colors duration-200">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm hover:text-white transition-colors duration-200">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Large watermark text at the bottom with hover glow */}
      <div
        className="relative mt-16 flex items-end justify-center select-none cursor-default"
        aria-hidden="true"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--glow-x', `${x}px`);
          e.currentTarget.style.setProperty('--glow-y', `${y}px`);
          e.currentTarget.style.setProperty('--glow-opacity', '1');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--glow-opacity', '0');
        }}
      >
        {/* Radial glow that follows the cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: 'var(--glow-opacity, 0)',
            background: 'radial-gradient(300px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(37, 99, 235, 0.15), transparent 70%)',
          }}
        />
        <div className="w-full translate-y-[10%] text-center">
          <span
            className="font-extrabold leading-none transition-all duration-300 inline-block w-full"
            style={{
              fontSize: 'clamp(80px, 15vw, 200px)',
              WebkitTextStroke: '2px rgba(255,255,255,0.06)',
              color: 'transparent',
              backgroundImage: 'radial-gradient(300px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(37, 99, 235, 0.35), transparent 70%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Quobo
          </span>
        </div>
      </div>
    </footer>
  );
}
