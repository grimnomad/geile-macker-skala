import { ComponentType } from 'react';

interface RouteConfig {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export type { RouteConfig };
