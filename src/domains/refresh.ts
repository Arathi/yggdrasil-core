import { AccessToken, ClientToken } from './common';
import { Profile } from './profile';
import { User } from './user';

export interface RefreshRequest {
  accessToken: AccessToken;
  clientToken: ClientToken;
  selectedProfile?: Profile;
  requestUser?: boolean;
}

export interface RefreshResponse {
  accessToken: AccessToken;
  clientToken: ClientToken;
  selectedProfile: Profile;
  user?: User;
}
