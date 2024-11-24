import { post, get } from '@/config/axiosConfig';

import { ApiResult } from '@/services/types';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const nonce = async ({
  address,
}: {
  address: string;
}): Promise<ApiResult> => {
  return get<ApiResult>(BASE_URL + `auth/nonce`, {
    address,
  });
};

export const authenticate = async (
  param: Record<string, any>
): Promise<ApiResult> => {
  return post<ApiResult>(BASE_URL + `auth/authenticate`, param);
};
