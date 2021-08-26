import { createObject } from '@gms/shared';
import produce from 'immer';

import { Headers } from '../types';

function createHeaders(token?: string | null): HeadersInit {
  let headers = createObject<Headers>({
    'Content-Type': 'application/json;charset=utf-8'
  });

  if (token) {
    headers = produce(headers, (draft) => {
      draft.Authorization = `Bearer ${token}`;
    });
  }

  return headers;
}

export { createHeaders };
