import React from 'react';

export const HowItWorks: React.FC = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Como funciona</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          'Cadastre produtos e categorias em minutos.',
          'Faça a contagem com o app e audite sem papel.',
          'Acompanhe relatórios e aja com segurança.',
        ].map((step, i) => (
          <div key={step} className="rounded-2xl bg-white border border-slate-200 p-6">
            <span className="inline-flex w-8 h-8 rounded-full bg-primary text-white items-center justify-center font-semibold">{i + 1}</span>
            <p className="text-slate-700 mt-4">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
