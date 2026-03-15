import { Worker } from 'bullmq';

export const notificationWorker = new Worker('notifications', async (job) => {
  if (job.name === 'send-reminder') {
    return { sent: true, channel: 'email', to: job.data.to };
  }
  if (job.name === 'export-csv') {
    // TODO: generar CSV real en storage.
    return { exported: true, reportId: job.data.reportId };
  }
  return { ignored: true };
});
