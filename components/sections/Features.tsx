export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Recursos principais para escalar com controle</h2>
        <p className="text-slate-600 text-center mt-4 max-w-3xl mx-auto">Tudo o que você precisa para reduzir perdas, melhorar processos e manter seu estoque saudável.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            ['Auditorias inteligentes', 'Conduza inventários com etapas simples e rastreabilidade total.'],
            ['Relatórios acionáveis', 'Visualize indicadores de entrada, saída e ruptura em poucos cliques.'],
            ['Multiusuário', 'Trabalhe com sua equipe mantendo permissões e histórico por ação.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 mt-3">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
