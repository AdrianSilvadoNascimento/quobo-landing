import React from 'react';

export const SocialProof: React.FC = () => (
  <section className="py-10 bg-white border-y border-slate-200">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-center text-slate-500 text-sm uppercase tracking-wider mb-6">Empresas que já confiam na Quobo</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {['Mercado Lima', 'Casa Forte', 'Distribuidora Atlas', 'Farmácia Norte'].map((name) => (
          <div key={name} className="rounded-xl bg-slate-50 border border-slate-200 py-4 px-3 text-slate-700 font-medium">
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);
