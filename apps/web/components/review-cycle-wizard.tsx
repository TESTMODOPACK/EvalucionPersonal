'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  templateId: z.string().min(1, 'Selecciona plantilla'),
  population: z.string().min(1, 'Define población'),
  selfWindow: z.string().min(1, 'Fecha requerida'),
  managerWindow: z.string().min(1, 'Fecha requerida'),
  anonymizeThreshold: z.coerce.number().min(3).max(10)
});

type FormData = z.infer<typeof schema>;

const steps = ['Plantilla', 'Población', 'Ventanas', 'Settings'];

export function ReviewCycleWizard() {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { anonymizeThreshold: 4 }
  });

  const onSubmit = (data: FormData) => alert(`Ciclo creado: ${JSON.stringify(data)}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">Wizard de ciclo ({steps[step]})</h2>
      {step === 0 && <input className="w-full rounded border p-2" placeholder="template-v2" {...register('templateId')} />}
      {step === 1 && <input className="w-full rounded border p-2" placeholder="Engineering, Sales" {...register('population')} />}
      {step === 2 && (
        <div className="grid gap-2 md:grid-cols-2">
          <input className="rounded border p-2" type="date" {...register('selfWindow')} />
          <input className="rounded border p-2" type="date" {...register('managerWindow')} />
        </div>
      )}
      {step === 3 && <input className="w-full rounded border p-2" type="number" {...register('anonymizeThreshold')} />}
      <p className="text-sm text-red-600">{Object.values(errors)[0]?.message as string}</p>
      <div className="flex gap-2">
        <button type="button" onClick={() => setStep(Math.max(0, step - 1))} className="rounded bg-slate-200 px-4 py-2">Atrás</button>
        {step < 3 ? (
          <button type="button" onClick={() => setStep(step + 1)} className="rounded bg-blue-600 px-4 py-2 text-white">Siguiente</button>
        ) : (
          <button type="submit" className="rounded bg-emerald-600 px-4 py-2 text-white">Crear ciclo</button>
        )}
      </div>
    </form>
  );
}
