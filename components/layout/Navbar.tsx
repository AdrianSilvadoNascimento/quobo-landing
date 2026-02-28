import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="navbar fixed top-0 z-50 bg-white/95 border-b border-slate-200 px-4 md:px-8 backdrop-blur-md">
      <div className="navbar-start gap-2">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-sm" aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-slate-200">
            <li><a href="#features">Recursos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><Link href="/terms">Termos</Link></li>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 text-xl">
          <Image src="/quobo-icon.svg" alt="Quobo" width={28} height={28} priority />
          Quobo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-slate-700">
          <li><a href="#features">Recursos</a></li>
          <li><a href="#pricing">Preços</a></li>
          <li><Link href="/terms">Termos</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a href="https://staging.quobo.io/" className="btn btn-ghost text-slate-700 hidden sm:inline-flex">Login</a>
        <a href="https://staging.quobo.io/" className="btn bg-primary hover:bg-primary-dark text-white border-none">Cadastrar grátis</a>
      </div>
    </header>
  );
}
