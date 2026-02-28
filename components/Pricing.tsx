import React, { useEffect, useState } from 'react';
import { Plan, Period } from '../types';

export const Pricing: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [interval, setIntervalState] = useState<number>(Period.MONTHLY);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('https://staging-310468012204.us-east1.run.app/api/v2/plan');
        if (!response.ok) throw new Error('Falha ao carregar planos');
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handleSubscribe = () => {
    // Check if user is logged in (simulated check)
    const isLoggedIn = false; 
    
    // In a real app, you would check auth state/cookie
    if (isLoggedIn) {
      window.location.href = 'https://staging.quobo.io/checkout';
    } else {
      // Use a custom alert or modal. For simplicity in this generated code, using browser confirm/alert logic
      // Ideally this would be a DaisyUI modal.
      const modal = document.getElementById('subscribe_modal') as HTMLDialogElement;
      if (modal) modal.showModal();
    }
  };

  const filteredPlans = plans
    .filter((plan) => plan.interval === interval && plan.status === 'ACTIVE')
    // Remove duplicates based on name/tier if necessary, or just sort by price
    .sort((a, b) => a.value - b.value);

  // Helper to format currency (value comes in cents)
  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value / 100);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="badge badge-secondary mb-4">Investimento</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Planos que cabem no seu bolso</h2>
          
          <div className="flex justify-center mb-8">
            <div className="join bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              <input 
                type="radio" 
                name="period_options" 
                className="join-item btn btn-sm btn-ghost checked:bg-quobo-600 checked:text-white rounded-full px-6" 
                aria-label="Mensal" 
                checked={interval === Period.MONTHLY}
                onChange={() => setIntervalState(Period.MONTHLY)}
              />
              <input 
                type="radio" 
                name="period_options" 
                className="join-item btn btn-sm btn-ghost checked:bg-quobo-600 checked:text-white rounded-full px-6" 
                aria-label="Semestral"
                checked={interval === Period.SEMI_ANNUAL}
                onChange={() => setIntervalState(Period.SEMI_ANNUAL)}
              />
              <input 
                type="radio" 
                name="period_options" 
                className="join-item btn btn-sm btn-ghost checked:bg-quobo-600 checked:text-white rounded-full px-6" 
                aria-label="Anual"
                checked={interval === Period.ANNUAL}
                onChange={() => setIntervalState(Period.ANNUAL)}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-quobo-600"></span>
          </div>
        ) : error ? (
           <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`card bg-base-100 border transition-all duration-300 hover:-translate-y-2
                  ${plan.name.includes('Ouro') ? 'border-yellow-400 shadow-yellow-100 shadow-xl scale-105 z-20' : 'border-slate-100 shadow-xl hover:shadow-2xl'}
                `}
              >
                {plan.name.includes('Ouro') && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="badge badge-warning text-xs font-bold shadow-md">RECOMENDADO</span>
                  </div>
                )}
                
                <div className="card-body">
                  <h3 className={`text-2xl font-bold ${plan.name.includes('Ouro') ? 'text-yellow-600' : 'text-slate-800'}`}>
                    {plan.name.split('-')[0].trim()}
                  </h3>
                  <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                  
                  <div className="my-6">
                    <span className="text-4xl font-extrabold text-slate-900">{formatMoney(plan.value)}</span>
                    <span className="text-slate-500 text-sm">
                        /{interval === 12 ? 'ano' : interval === 6 ? 'semestre' : 'mês'}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.feature_list.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>{feature.replace('✓', '').trim()}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-actions justify-end mt-auto">
                    <button 
                        onClick={handleSubscribe}
                        className={`btn w-full ${plan.name.includes('Ouro') ? 'btn-warning text-white' : 'btn-outline border-quobo-200 text-quobo-600 hover:bg-quobo-600 hover:border-quobo-600 hover:text-white'}`}
                    >
                      Assinar {plan.name.split('-')[0].trim()}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subscription Modal */}
      <dialog id="subscribe_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-quobo-700">Comece seus 14 dias grátis!</h3>
          <p className="py-4 text-slate-600">
            Para assinar este plano, você precisa criar uma conta primeiro. 
            Você terá acesso total por 14 dias sem precisar de cartão de crédito.
          </p>
          <div className="modal-action flex-col sm:flex-row gap-2">
            <a href="https://staging.quobo.io/" className="btn btn-primary bg-quobo-600 border-none text-white w-full sm:w-auto">
              Criar Conta Grátis
            </a>
            <a href="https://staging.quobo.io/checkout" className="btn btn-ghost w-full sm:w-auto">
              Já tenho conta (Ir para Checkout)
            </a>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
      </dialog>
    </section>
  );
};