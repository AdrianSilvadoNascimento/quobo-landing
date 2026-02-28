import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">O dia a dia do seu negócio simplificado</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Do recebimento de mercadorias à auditoria final, o Quobo está presente em cada etapa com tecnologia de ponta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            {/* Feature 1: Mobile Audit */}
            <div className="card bg-base-100 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="card-body items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-quobo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-quobo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="card-title text-2xl mb-2">Aplicativo Mobile</h3>
                    <p className="text-slate-500">
                        Transforme seu celular em um coletor de dados. Use a câmera para escanear códigos de barras e realizar contagens rápidas.
                    </p>
                </div>
                <figure className="px-6 pb-6 pt-0">
                    <div className="bg-slate-50 rounded-xl p-4 w-full h-48 flex items-center justify-center border border-dashed border-slate-200">
                        <span className="text-slate-400 text-sm">Interface de Escaneamento</span>
                    </div>
                </figure>
            </div>

            {/* Feature 2: Offline First */}
            <div className="card bg-base-100 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="card-body items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
                    </div>
                    <h3 className="card-title text-2xl mb-2">Offline First</h3>
                    <p className="text-slate-500">
                        Seu depósito não tem Wi-Fi? Sem problemas. Realize todas as operações offline e sincronize automaticamente quando a conexão voltar.
                    </p>
                </div>
                 <figure className="px-6 pb-6 pt-0">
                    <div className="bg-slate-50 rounded-xl p-4 w-full h-48 flex items-center justify-center border border-dashed border-slate-200">
                         <span className="text-slate-400 text-sm">Dados Sincronizados</span>
                    </div>
                </figure>
            </div>

            {/* Feature 3: Analytics */}
            <div className="card bg-base-100 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="card-body items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <h3 className="card-title text-2xl mb-2">Relatórios Precisos</h3>
                    <p className="text-slate-500">
                        Tenha visão total de entradas, saídas e itens parados. Tome decisões baseadas em dados reais, não em suposições.
                    </p>
                </div>
                 <figure className="px-6 pb-6 pt-0">
                    <div className="bg-slate-50 rounded-xl p-4 w-full h-48 flex items-center justify-center border border-dashed border-slate-200">
                         <span className="text-slate-400 text-sm">Gráficos de Movimentação</span>
                    </div>
                </figure>
            </div>
        </div>
      </div>
    </section>
  );
};