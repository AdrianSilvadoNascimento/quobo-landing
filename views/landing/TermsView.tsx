import Link from 'next/link';

export function TermsView() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Adesão e Uso</h1>
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Resumo Simplificado</h2>
          <div className="space-y-4 text-slate-600">
            <p><strong>Guarda de Dados e Inatividade:</strong> Se você decidir não assinar após os 14 dias de teste, manteremos seus dados seguros por <strong>3 meses (90 dias)</strong>. Após esse período, sua conta e registros serão excluídos permanentemente.</p>
            <p><strong>Cancelamento Sem Complicação:</strong> Você pode cancelar a qualquer momento. O acesso segue até o final do período já pago.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl"><input type="radio" name="terms" defaultChecked /><div className="collapse-title text-xl font-medium text-slate-800">I. O Período de Experiência (Trial)</div><div className="collapse-content text-slate-600"><p>Você tem 14 dias para testar o Quobo com todas as funcionalidades sem cartão de crédito.</p></div></div>
          <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl"><input type="radio" name="terms" /><div className="collapse-title text-xl font-medium text-slate-800">Cláusula IV – Do Período de Teste e Exclusão de Dados</div><div className="collapse-content text-slate-600"><p>Após o prazo de inatividade sem assinatura vigente, os dados poderão ser excluídos definitivamente.</p></div></div>
          <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl"><input type="radio" name="terms" /><div className="collapse-title text-xl font-medium text-slate-800">Cláusula V – Do Cancelamento e Vigência</div><div className="collapse-content text-slate-600"><p>O cancelamento interrompe a renovação automática e mantém acesso até o fim do ciclo pago.</p></div></div>
        </div>
        <div className="mt-12 text-center"><Link href="/" className="btn btn-ghost">Voltar para a página inicial</Link></div>
      </div>
    </div>
  );
}
