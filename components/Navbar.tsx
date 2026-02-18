import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToPricing = () => {
    if (isHome) {
      const element = document.getElementById('pricing');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we are on Terms page, we go home then scroll (handled by useEffect in Home or simple link)
      window.location.hash = '#pricing';
    }
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md fixed top-0 z-50 shadow-sm border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><button onClick={scrollToPricing}>Planos</button></li>
            <li><Link to="/terms">Termos de Uso</Link></li>
            <li><a href="https://staging.quobo.io/" target="_blank" rel="noopener noreferrer">Login</a></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-quobo-700 gap-2">
          {/* Cube Icon */}
          <svg className="w-8 h-8 text-quobo-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.88 2.39L20.8 6.96C21.46 7.34 21.96 7.97 22 8.7V17.07C22 18.66 20.8 20.14 19.2 20.59L12.88 22.39C12.32 22.55 11.68 22.55 11.12 22.39L4.8 20.59C3.2 20.14 2 18.66 2 17.07V8.7C2.04 7.97 2.54 7.34 3.2 6.96L11.12 2.39C11.68 2.07 12.32 2.07 12.88 2.39ZM13 10.37V4.92L18.47 8.08L13 11.24V10.37ZM5.53 8.08L11 4.92V10.37L5.53 11.24V8.08ZM5 18.5L11 20.21V12.63L5 11.68V18.5ZM19 18.5V11.68L13 12.63V20.21L19 18.5Z" />
          </svg>
          Quobo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-600">
           {isHome ? (
             <li><button onClick={scrollToPricing}>Preços</button></li>
           ) : (
             <li><Link to="/#pricing">Preços</Link></li>
           )}
          <li><Link to="/terms">Termos de Uso</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a href="https://staging.quobo.io/" className="btn btn-ghost hidden sm:inline-flex text-quobo-700">Login</a>
        <a href="https://staging.quobo.io/" className="btn btn-primary bg-quobo-600 hover:bg-quobo-700 border-none text-white shadow-lg shadow-quobo-500/30">
          Cadastrar Grátis
        </a>
      </div>
    </div>
  );
};