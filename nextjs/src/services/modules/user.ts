import { post, get } from '@/config/axiosConfig';

import { ApiResult } from '@/services/types';

export const queryList = async (): Promise<ApiResult> => {
  return get<ApiResult>(`user/queryList`);
};
