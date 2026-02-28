import React from 'react';

const blocks = [
  {
    title: 'Dashboard macro em tempo real',
    desc: 'Tenha uma visão geral da operação com indicadores essenciais e alertas instantâneos.',
  },
  {
    title: 'Auditorias guiadas e precisas',
    desc: 'Conduza inventários com um fluxo simples para reduzir erros e retrabalho.',
  },
  {
    title: 'Operação mobile sem papel',
    desc: 'Realize contagens em campo com o celular e sincronize tudo automaticamente.',
  },
];

export const SolutionSection: React.FC = () => (
  <section id="solucao" className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">A solução completa para sua equipe</h2>
      {blocks.map((block, index) => (
        <div key={block.title} className={`grid md:grid-cols-2 gap-6 items-center ${index % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div className="rounded-2xl border border-slate-200 bg-white h-52 flex items-center justify-center text-slate-500">
            Preview do produto
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{block.title}</h3>
            <p className="text-slate-600 mt-3">{block.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
