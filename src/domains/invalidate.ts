import { AccessToken, ClientToken } from './common';

export interface InvalidateRequest {
  accessToken: AccessToken;
  clientToken?: ClientToken;
}
