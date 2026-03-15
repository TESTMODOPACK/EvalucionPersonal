import { ReviewCycleWizard } from '../../../../components/review-cycle-wizard';

export default function NuevoCicloPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Nuevo ciclo de evaluación</h1>
      <ReviewCycleWizard />
    </section>
  );
}
