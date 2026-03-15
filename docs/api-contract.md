# API Contract `/api/v1`

## Auth
- `GET /me`
- `POST /auth/refresh`

## Employees
- `GET /employees`
- `POST /employees`
- `GET /employees/:id`
- `PATCH /employees/:id`
- `DELETE /employees/:id`
- `POST /employees/import`

## Review cycles
- `GET /review-cycles`
- `POST /review-cycles`
- `PATCH /review-cycles/:id`
- `DELETE /review-cycles/:id`
- `POST /review-cycles/:id/launch`

### Ejemplo `POST /review-cycles`
```json
{
  "organizationId": "f6f1c0df-0188-45e1-9dbe-36adcd10674e",
  "name": "Ciclo H1",
  "templateId": "eecf39f2-97b9-47f0-aa24-0328dce84a79",
  "startsAt": "2026-01-10T00:00:00.000Z",
  "endsAt": "2026-03-10T00:00:00.000Z",
  "populationEmployeeIds": ["52f60024-7777-4f8a-b47f-e6b62b1f9ca8"],
  "anonymityThreshold": 4
}
```

## Review instances
- `POST /review-instances/:id/submit`
- `POST /review-instances/:id/signoff`

## 360
- `POST /360/nominations`
- `POST /360/assignments`
- `GET /360/report/:employeeId`

## Feedback
- `POST /feedback`
- `GET /feedback/inbox`

## OKR
- `GET /okr/objectives`
- `POST /okr/objectives`
- `POST /okr/key-results`
- `POST /okr/checkins`

## Calibration
- `POST /calibration/sessions`
- `POST /calibration/adjustments`
- `POST /calibration/sessions/:id/finalize`

## Reporting
- `GET /reporting/dashboards`
- `POST /reporting/exports`
