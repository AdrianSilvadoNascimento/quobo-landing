import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold mb-4">Comece em minutos</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Gestão de estoque simples, inteligente e sem complicação.
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-6">
            Controle produtos, faça auditorias e conte estoque pelo celular.
          </p>
          <p className="text-slate-500 text-sm mt-3">14 dias grátis. Sem cartão.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://staging.quobo.io/" className="btn bg-primary hover:bg-primary-dark text-white border-none">
              Começar grátis
            </a>
            <a href="#pricing" className="btn bg-slate-50 border border-slate-300 text-slate-700 hover:bg-slate-100">
              Ver planos
            </a>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-slate-500 text-sm">Itens em estoque</p>
              <p className="text-2xl font-bold text-slate-900">2.430</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-slate-500 text-sm">Auditorias hoje</p>
              <p className="text-2xl font-bold text-slate-900">17</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 col-span-2">
              <p className="text-slate-500 text-sm mb-2">Sincronização em tempo real</p>
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-4/5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
