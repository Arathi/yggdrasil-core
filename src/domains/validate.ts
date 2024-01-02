import { AccessToken, ClientToken } from './common';

export interface ValidateRequest {
  accessToken: AccessToken;
  clientToken?: ClientToken;
}
