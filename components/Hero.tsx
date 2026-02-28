import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const words = ["Controle", "Auditoria", "Organização"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-slate-50 to-quobo-50 pt-16 relative overflow-hidden">
      {/* Decorative floating cubes background */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-quobo-200/40 rounded-3xl rotate-12 animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/30 rounded-full animate-float delay-1000 blur-xl"></div>
      
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl w-full px-6 gap-12 z-10">
        
        {/* Right side: Abstract Dashboard Representation or Placeholder Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="mockup-window border border-base-300 bg-base-100 shadow-2xl w-full max-w-lg transform hover:-translate-y-2 transition duration-500">
             <div className="flex justify-center bg-quobo-50 p-4 h-[300px] sm:h-[400px] relative overflow-hidden">
                {/* Abstract UI representation using CSS shapes */}
                <div className="w-full h-full flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-full bg-green-100"></div>
                            <div className="w-16 h-2 bg-slate-200 rounded"></div>
                        </div>
                        <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between">
                             <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                             <div className="w-16 h-2 bg-slate-200 rounded"></div>
                        </div>
                        <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between">
                             <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                             <div className="w-16 h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-sm p-6 relative">
                        <div className="w-full h-4 bg-slate-100 rounded mb-4"></div>
                        <div className="w-3/4 h-4 bg-slate-100 rounded mb-4"></div>
                        <div className="w-1/2 h-4 bg-slate-100 rounded mb-4"></div>
                        
                         {/* Floating 'Scan' element to represent mobile usage */}
                        <div className="absolute -right-4 -bottom-4 bg-slate-800 text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                           <span>Scan via App</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="badge badge-primary badge-outline mb-4">Gestão Inteligente v2.0</div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Seu estoque com mais{' '}
            <span className="block animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-quobo-600 to-quobo-400">
              {words[index]}
            </span>
          </h1>
          <p className="py-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
            A plataforma completa para gestão de estoque com aplicativo mobile integrado. 
            Realize auditorias off-line, escaneie produtos e mantenha seu negócio organizado em qualquer lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="btn btn-primary bg-quobo-600 border-none hover:bg-quobo-700 text-white btn-lg shadow-lg shadow-quobo-500/30">
              Começar Agora
            </a>
            <a href="#features" className="btn btn-ghost btn-lg text-slate-600 hover:bg-slate-100">
              Saber mais
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               <span>14 dias grátis</span>
            </div>
             <div className="flex items-center gap-1">
               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               <span>Sem cartão de crédito</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};