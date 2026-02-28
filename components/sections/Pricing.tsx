'use client';

import { useMemo, useState } from 'react';

type Cycle = 'mensal' | 'semestral' | 'anual';

type Tier = {
  name: string;
  monthly: number;
  cta: string;
  highlight?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  { name: 'FREE', monthly: 0, cta: 'Começar teste grátis', features: ['1 usuário', 'Controle básico', 'Suporte por e-mail'] },
  { name: 'BRONZE', monthly: 1290, cta: 'Assinar plano', features: ['Até 3 usuários', 'Auditorias simples', 'App mobile'] },
  { name: 'PRATA', monthly: 5990, cta: 'Assinar plano', highlight: true, features: ['Até 10 usuários', 'Relatórios avançados', 'Integração em tempo real'] },
  { name: 'OURO', monthly: 9990, cta: 'Assinar plano', features: ['Usuários ilimitados', 'Suporte prioritário', 'Painel executivo'] },
];

const multipliers: Record<Cycle, number> = { mensal: 1, semestral: 6, anual: 12 };

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('mensal');
  const plans = useMemo(() => TIERS.map((tier) => ({ ...tier, price: tier.monthly * multipliers[cycle] })), [cycle]);

  const formatMoney = (value: number) =>
    (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Pricing simples e transparente</h2>
        <p className="text-slate-600 text-center mt-4">Escolha entre mensal, semestral ou anual. Cancele quando quiser.</p>
        <div className="flex justify-center mt-8">
          <div className="join bg-white p-1 rounded-full border border-slate-300">
            {(['mensal', 'semestral', 'anual'] as Cycle[]).map((value) => (
              <button key={value} onClick={() => setCycle(value)} className={`join-item btn btn-sm rounded-full px-6 ${cycle === value ? 'bg-primary hover:bg-primary-dark text-white border-none' : 'bg-white border-none text-slate-700'}`}>
                {value[0].toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-2xl border p-6 bg-white shadow-sm ${plan.highlight ? 'border-primary shadow-blue-100' : 'border-slate-200'}`}>
              {plan.highlight && <span className="badge bg-primary text-white border-none mb-4">Mais popular</span>}
              <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="text-3xl font-bold text-slate-900 mt-4">{formatMoney(plan.price)}</p>
              <p className="text-sm text-slate-500">/{cycle}</p>
              <ul className="mt-5 space-y-2 text-slate-600 text-sm">{plan.features.map((feature) => <li key={feature}>• {feature}</li>)}</ul>
              <a href="https://staging.quobo.io/" className={`btn mt-6 w-full ${plan.highlight ? 'bg-primary hover:bg-primary-dark text-white border-none' : 'bg-slate-50 border border-slate-300 text-slate-700 hover:bg-slate-100'}`}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
