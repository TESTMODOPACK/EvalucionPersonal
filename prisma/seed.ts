import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const org = await prisma.organization.create({ data: { name: 'Acme ES', locale: 'es-ES' } });
  const department = await prisma.department.create({ data: { organizationId: org.id, name: 'Engineering' } });
  const team = await prisma.team.create({ data: { organizationId: org.id, name: 'Platform', departmentId: department.id } });

  const employees = [] as string[];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: { organizationId: org.id, email: `empleado${i}@acme.es`, role: i < 3 ? UserRole.MANAGER : UserRole.EMPLOYEE }
    });
    const employee = await prisma.employee.create({
      data: {
        organizationId: org.id,
        userId: user.id,
        firstName: `Empleado`,
        lastName: `${i}`,
        departmentId: department.id,
        teamId: team.id
      }
    });
    employees.push(employee.id);
  }

  const template = await prisma.reviewTemplate.create({ data: { organizationId: org.id, name: 'Plantilla General', version: 1 } });

  await prisma.reviewCycle.createMany({
    data: [
      { organizationId: org.id, templateId: template.id, name: 'Ciclo H1', startsAt: new Date('2026-01-01'), endsAt: new Date('2026-03-31'), status: 'ACTIVE' },
      { organizationId: org.id, templateId: template.id, name: 'Ciclo H2', startsAt: new Date('2026-07-01'), endsAt: new Date('2026-09-30'), status: 'DRAFT' }
    ]
  });

  const obj = await prisma.objective.create({ data: { organizationId: org.id, employeeId: employees[0], title: 'Mejorar disponibilidad', quarter: '2026Q1' } });
  const kr = await prisma.keyResult.create({ data: { objectiveId: obj.id, title: '99.95% uptime', targetValue: 99.95, currentValue: 99.5 } });
  await prisma.kPIValue.create({ data: { keyResultId: kr.id, value: 99.6 } });
  await prisma.checkIn.create({ data: { objectiveId: obj.id, note: 'Avance semanal positivo' } });

  const fb = await prisma.feedbackItem.create({ data: { organizationId: org.id, fromEmployeeId: employees[1], toEmployeeId: employees[0], content: 'Gran colaboración en incidente P1', visibility: 'REQUESTED' } });
  await prisma.feedbackTag.create({ data: { feedbackId: fb.id, name: 'colaboración' } });
  await prisma.feedbackItem.create({ data: { organizationId: org.id, fromEmployeeId: employees[2], toEmployeeId: employees[0], content: 'Excelente mentoring', visibility: 'SPONTANEOUS' } });
}

main().finally(() => prisma.$disconnect());
