import {HexadecimalString, UserName} from './common';

export interface User {
  username: UserName;
  properties: Property[];
  id: HexadecimalString;
}

export interface Property {
  name: string;
  value: string;
}
