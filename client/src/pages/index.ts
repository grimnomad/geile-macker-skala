import { lazy } from 'react';

const Public = lazy(() => import('./public/Public'));
const Private = lazy(() => import('./private/Private'));

export { Private, Public };
