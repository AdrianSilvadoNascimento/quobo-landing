import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer p-10 bg-slate-900 text-slate-300">
      <aside>
        <div className="flex items-center gap-2 mb-2">
            <svg className="w-8 h-8 text-quobo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.88 2.39L20.8 6.96C21.46 7.34 21.96 7.97 22 8.7V17.07C22 18.66 20.8 20.14 19.2 20.59L12.88 22.39C12.32 22.55 11.68 22.55 11.12 22.39L4.8 20.59C3.2 20.14 2 18.66 2 17.07V8.7C2.04 7.97 2.54 7.34 3.2 6.96L11.12 2.39C11.68 2.07 12.32 2.07 12.88 2.39ZM13 10.37V4.92L18.47 8.08L13 11.24V10.37ZM5.53 8.08L11 4.92V10.37L5.53 11.24V8.08ZM5 18.5L11 20.21V12.63L5 11.68V18.5ZM19 18.5V11.68L13 12.63V20.21L19 18.5Z" /></svg>
            <span className="text-2xl font-bold text-white">Quobo</span>
        </div>
        <p>A solução definitiva para o seu estoque.<br/>Desenvolvido com foco na simplicidade e mobilidade.</p>
      </aside> 
      <nav>
        <header className="footer-title">Serviços</header> 
        <a href="#features" className="link link-hover">Funcionalidades</a> 
        <a href="#pricing" className="link link-hover">Planos e Preços</a> 
        <a href="https://staging.quobo.io" className="link link-hover">App Web</a>
      </nav> 
      <nav>
        <header className="footer-title">Empresa</header> 
        <a className="link link-hover">Sobre nós</a> 
        <a className="link link-hover">Contato</a> 
        <a className="link link-hover">Imprensa</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <Link to="/terms" className="link link-hover">Termos de Uso</Link> 
        <Link to="/terms" className="link link-hover">Política de Privacidade</Link>
      </nav>
    </footer>
  );
};