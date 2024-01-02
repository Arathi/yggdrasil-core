export type UserName = Email | PlayerName;

export type Email = string;
export type PlayerName = string;

export type UUID = string;
export type JsonWebToken = string;

export type HexadecimalString = string;

// export const EmailPattern = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export type ClientToken = UUID | string;
export type AccessToken = UUID | JsonWebToken;
