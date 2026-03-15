import { SetMetadata } from '@nestjs/common';

export type PermissionMeta = {
  role: 'HR_ADMIN' | 'MANAGER' | 'EMPLOYEE';
  scope?: 'ORG' | 'DEPARTMENT' | 'TEAM' | 'SELF';
};

export const PERMISSION_KEY = 'permission';
export const Permission = (meta: PermissionMeta) => SetMetadata(PERMISSION_KEY, meta);
