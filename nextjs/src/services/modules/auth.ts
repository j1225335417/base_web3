import { post, get } from '@/config/axios';

import { ApiResult } from '@/services/types';
export const nonce = async ({
  address,
}: {
  address: string;
}): Promise<ApiResult> => {
  return get<ApiResult>(`auth/nonce`, { address });
};

export const authenticate = async (
  param: Record<string, any>
): Promise<ApiResult> => {
  return post<ApiResult>(`auth/authenticate`, param);
};
