import Image from 'next/image';
import Link from 'next/link';

const env = process.env.NEXT_PUBLIC_APP_URL;

const NAV_LINKS = [
  { href: '/#features', label: 'Recursos' },
  { href: '/#pricing', label: 'Preços' },
  { href: '/terms', label: 'Termos' },
];

export function Navbar() {
  return (
    <header className="navbar fixed top-0 z-50 bg-primary border-b border-slate-200 px-4 md:px-8 backdrop-blur-md">
      <div className="navbar-start gap-2">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-sm" aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 border border-slate-200">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="text-white">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
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
          <span className="text-xl transition-all duration-300 group-hover:tracking-wider group-hover:text-white">
            Quobo
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-white">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a href={`${env}/login`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost rounded-full text-white hover:text-white/80 hover:bg-transparent hidden sm:inline-flex hover:translate-y-[-2px] transition-all duration-200">Login</a>
        <a href={`${env}/register`} target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-white rounded-full hover:bg-white/80 text-slate-600 border-none hover:translate-y-[-2px] transition-all duration-200">Cadastrar grátis</a>
      </div>
    </header>
  );
}
