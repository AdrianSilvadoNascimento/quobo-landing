const issues = [
  { icon: '📦', title: 'Estoque desorganizado', desc: 'Dificuldade para encontrar e rastrear produtos no dia a dia.' },
  { icon: '⚠️', title: 'Perda de produtos', desc: 'Extravios e vencimentos acontecem por falta de controle central.' },
  { icon: '📊', title: 'Falta de visão macro', desc: 'Sem relatórios claros, fica difícil tomar decisões rápidas.' },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Você não precisa mais sofrer com o estoque</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {issues.map((issue) => (
            <article key={issue.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-3xl">{issue.icon}</p>
              <h3 className="text-xl font-semibold text-slate-900 mt-4">{issue.title}</h3>
              <p className="text-slate-600 mt-2">{issue.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
