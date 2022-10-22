interface ITokens {
  token_type: 'Bearer';
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface IAuth {
  created_at: string;
  email: string;
  id: number;
  name: string;
  tokens: ITokens;
  updated_at: string;
}
