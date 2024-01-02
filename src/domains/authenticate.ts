import { ClientToken, UserName, AccessToken } from './common';
import { User } from './user';
import { Profile } from './profile'

type AgentName = 'Minecraft';
type AgentVersion = 1;

interface Agent {
  name: AgentName,
  version: AgentVersion,
}

export interface AuthenticateRequest {
  agent: Agent;
  username: UserName;
  password: string;
  clientToken?: ClientToken;
  requestUser?: boolean;
}

export interface AuthenticateResponse {
  user?: User;
  clientToken?: ClientToken;
  accessToken: AccessToken;
  availableProfiles: Profile[];
  selectedProfile: Profile;
}
