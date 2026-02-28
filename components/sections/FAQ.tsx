export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">FAQ</h2>
        <div className="mt-10 space-y-3">
          <div className="collapse collapse-plus bg-slate-50 border border-slate-200"><input type="radio" name="faq" defaultChecked /><div className="collapse-title font-semibold text-slate-900">Preciso de cartão para testar?</div><div className="collapse-content text-slate-600">Não. Você tem 14 dias grátis sem inserir cartão de crédito.</div></div>
          <div className="collapse collapse-plus bg-slate-50 border border-slate-200"><input type="radio" name="faq" /><div className="collapse-title font-semibold text-slate-900">Funciona no celular?</div><div className="collapse-content text-slate-600">Sim. O app permite contagem, auditoria e atualização em tempo real.</div></div>
          <div className="collapse collapse-plus bg-slate-50 border border-slate-200"><input type="radio" name="faq" /><div className="collapse-title font-semibold text-slate-900">Posso cancelar quando quiser?</div><div className="collapse-content text-slate-600">Pode cancelar a qualquer momento sem burocracia.</div></div>
        </div>
      </div>
    </section>
  );
}
