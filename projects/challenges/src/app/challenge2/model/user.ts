export type Gender = 'male' | 'female' | 'other' | 'preferNotToSay';

export type AccountType = 'personal' | 'pro' | 'business';

export type LoginData = Pick<AccessData, 'username' | 'password'>;

export interface PersonalData {
  name: string;
  lastName: string;
  birthDate: string;
  gender: Gender | '';
  email: string;
  hasNewsletter: boolean;
}

export interface AccessData {
  username: string;
  password: string;
  repeatPassword: string;
  accountType: AccountType;
}

export interface User extends PersonalData, AccessData {}
