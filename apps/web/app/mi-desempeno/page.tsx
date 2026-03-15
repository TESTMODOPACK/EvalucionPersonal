export default function MiDesempenoPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Mi desempeño</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <article className="rounded bg-white p-4 shadow"><h2 className="font-semibold">Mis OKRs</h2><p>2 objetivos activos.</p></article>
        <article className="rounded bg-white p-4 shadow"><h2 className="font-semibold">Mis feedbacks</h2><p>5 items en inbox.</p></article>
        <article className="rounded bg-white p-4 shadow"><h2 className="font-semibold">Mis evaluaciones</h2><p>1 autoevaluación pendiente.</p></article>
      </div>
    </section>
  );
}
