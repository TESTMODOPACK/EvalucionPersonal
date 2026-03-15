import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const SENSITIVE = ['POST', 'PUT', 'PATCH', 'DELETE'];

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    if (SENSITIVE.includes(req.method)) {
      // TODO: persistir en AuditLog mediante servicio asíncrono
      console.info('[AUDIT]', {
        actorId: (req as any).user?.id ?? 'system',
        method: req.method,
        path: req.originalUrl,
        at: new Date().toISOString()
      });
    }
    next();
  }
}
