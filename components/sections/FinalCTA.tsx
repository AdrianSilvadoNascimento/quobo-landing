const env = process.env.NEXT_PUBLIC_APP_URL;

export function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center rounded-3xl border border-slate-200 bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Planos a partir de R$12,90</h2>
        <p className="text-slate-600 mt-4">Comece a usar o Quobo hoje mesmo e gerencie seu estoque de forma simples e eficiente.</p>
        <a href={`${env}/register`} target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-primary-dark text-white border-none mt-8">Começar teste grátis</a>
      </div>
    </section>
  );
}
