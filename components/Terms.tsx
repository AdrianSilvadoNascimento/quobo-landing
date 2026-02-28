import React, { useEffect } from 'react';

export const Terms: React.FC = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Adesão e Uso</h1>

        {/* UX Layer: Friendly Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-quobo-500 mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-quobo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Resumo Simplificado
            </h2>
            <div className="space-y-4 text-slate-600">
                <p>
                    <strong>Guarda de Dados e Inatividade:</strong> Se você decidir não assinar após os 14 dias de teste, manteremos seus dados seguros por <strong>3 meses (90 dias)</strong>. Após esse período, para garantir a privacidade e segurança do ecossistema, sua conta e todos os registros de estoque serão excluídos permanentemente.
                </p>
                <p>
                    <strong>Cancelamento Sem Complicação:</strong> Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel. Ao cancelar, você continuará com acesso total ao Quobo até o final do período que já foi pago (mês, semestre ou ano). Nenhuma nova cobrança será feita após o cancelamento.
                </p>
            </div>
        </div>

        {/* Detailed Terms Accordion */}
        <div className="space-y-4">
            
            <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                <div className="collapse-title text-xl font-medium text-slate-800">
                    I. O Período de Experiência (Trial)
                </div>
                <div className="collapse-content text-slate-600"> 
                    <p className="mb-2">Você tem 14 dias para testar o Quobo com todas as funcionalidades, sem precisar inserir dados de cartão de crédito. Este período é destinado à degustação das funcionalidades (leitura de código de barras, visão macro, etc.).</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium text-slate-800">
                    Cláusula IV – Do Período de Teste e Exclusão de Dados
                </div>
                <div className="collapse-content text-slate-600 space-y-4"> 
                    <p><strong>4.1. Degustação Gratuita:</strong> O Quobo oferece um período de teste de 14 (quatorze) dias corridos, sem a obrigatoriedade de inserção de dados de pagamento. Decorrido este prazo, o acesso às funcionalidades de edição e leitura de código de barras será suspenso até que uma assinatura seja efetivada.</p>
                    <p><strong>4.2. Prazo de Inatividade:</strong> Caso o Usuário não realize a contratação de um plano (Mensal, Semestral ou Anual) após o término do período de teste, os dados inseridos permanecerão armazenados em nossa base por um período máximo de 90 (noventa) dias.</p>
                    <p><strong>4.3. Exclusão Irreversível:</strong> Após o prazo de 90 dias de inatividade sem assinatura vigente, o Quobo reserva-se o direito de encerrar a conta e realizar a exclusão definitiva de todos os dados, o que inclui, mas não se limita a: inventários, históricos de movimentação, registros de produtos e configurações de usuário.</p>
                    <p className="pl-4 border-l-2 border-slate-300">4.3.1. O Usuário reconhece que, uma vez processada a exclusão, os dados não poderão ser recuperados sob nenhuma hipótese.</p>
                    <p><strong>4.4. Notificações:</strong> O sistema enviará alertas automáticos para o e-mail cadastrado antes que a exclusão definitiva ocorra, conferindo ao Usuário a oportunidade de exportar seus dados ou reativar a conta através de uma assinatura.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-white border border-slate-200 rounded-xl">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium text-slate-800">
                    Cláusula V – Do Cancelamento e Vigência
                </div>
                <div className="collapse-content text-slate-600 space-y-4"> 
                    <p><strong>5.1. Direito de Cancelamento:</strong> O Usuário poderá solicitar o cancelamento de sua assinatura a qualquer momento através das configurações de conta no Site ou Aplicativo, sem a necessidade de intervenção humana ou justificativa.</p>
                    <p><strong>5.2. Vigência Pós-Cancelamento:</strong> Ao efetivar o cancelamento, o acesso às funcionalidades premium do Quobo permanecerá ativo até o término do ciclo de faturamento vigente (mensal, semestral ou anual, conforme contratado).</p>
                    <p className="pl-4 border-l-2 border-slate-300">5.2.1. Não haverá reembolso proporcional ou estorno de valores referentes aos dias restantes entre a data do pedido de cancelamento e o fim do ciclo atual.</p>
                    <p><strong>5.3. Interrupção de Cobranças:</strong> O cancelamento interrompe a renovação automática do plano. Nenhuma nova cobrança será efetuada no cartão de crédito cadastrado após a confirmação do cancelamento pelo sistema.</p>
                    <p><strong>5.4. Reativação:</strong> O Usuário poderá reativar sua assinatura a qualquer momento antes do término do prazo de 90 dias de inatividade (mencionado na Cláusula IV), mantendo assim a integridade de seus dados de estoque.</p>
                </div>
            </div>
            
        </div>
        
        <div className="mt-12 text-center">
             <a href="/" className="btn btn-ghost">Voltar para a página inicial</a>
        </div>
      </div>
    </div>
  );
};