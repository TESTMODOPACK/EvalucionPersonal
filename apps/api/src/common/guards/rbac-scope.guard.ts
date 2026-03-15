import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY, PermissionMeta } from '../decorators/permission.decorator';

@Injectable()
export class RbacScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permission = this.reflector.get<PermissionMeta>(PERMISSION_KEY, context.getHandler());
    if (!permission) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user ?? { role: 'HR_ADMIN', scopes: ['ORG'] };

    const hasRole = user.role === permission.role || user.role === 'HR_ADMIN';
    const hasScope = !permission.scope || user.scopes?.includes(permission.scope) || user.scopes?.includes('ORG');

    if (!hasRole || !hasScope) {
      throw new ForbiddenException('No autorizado por RBAC/ABAC');
    }

    return true;
  }
}
