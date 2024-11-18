// src/types/apiTypes.ts
export interface User {
  id: string;
  name: string;
  email: string;
  // 其他用户属性...
}

export interface ApiResult{
  code:string;
  data:any;
  msg:string;
  style:number;
}
