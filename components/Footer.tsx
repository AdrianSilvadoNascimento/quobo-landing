import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-slate-600">
        <div>
          <p className="text-xl font-bold text-slate-900">Quobo</p>
          <p className="mt-3 text-sm">Sistema simples e acessível para gestão de estoque em PMEs.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Produto</p>
          <a href="#features" className="block mt-3 hover:text-primary">Funcionalidades</a>
          <a href="#pricing" className="block mt-2 hover:text-primary">Planos</a>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Empresa</p>
          <a className="block mt-3">Contato</a>
          <a className="block mt-2">Suporte</a>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Legal</p>
          <Link to="/terms" className="block mt-3 hover:text-primary">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
};
