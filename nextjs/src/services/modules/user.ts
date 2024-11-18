import { post, get } from '@/config/axios';

import { ApiResult } from '@/services/types';

export const queryList = async (): Promise<ApiResult> => {
  return get<ApiResult>(`user/queryList`);
};
