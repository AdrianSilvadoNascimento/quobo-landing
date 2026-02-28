export function MobileSection() {
  return (
    <section id="mobile" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Conte estoque pelo celular em segundos</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li><strong className="text-slate-900">⚡ Leitura rápida:</strong> escaneie e registre itens sem atrito.</li>
            <li><strong className="text-slate-900">🔄 Atualização em tempo real:</strong> sincronização imediata com o sistema.</li>
            <li><strong className="text-slate-900">🚶 Operação on way:</strong> use em movimento, sem depender do desktop.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 shadow-sm p-6 bg-slate-50 h-80 flex items-center justify-center text-slate-500">Mockup do app mobile</div>
      </div>
    </section>
  );
}
