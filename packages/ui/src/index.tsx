import React from 'react';

export function Badge({ children }: { children: React.ReactNode }) {
  return <span style={{ padding: '4px 8px', borderRadius: 8, background: '#e2e8f0' }}>{children}</span>;
}
