export interface CharacterBase {
  name: string;
  house: string;
  age: number;
  type: string;
  message: string;
  isAlive: boolean;
}

export interface King extends CharacterBase {
  kingdomYears?: number;
}

export interface Fighter extends CharacterBase {
  weapon?: string;
  skillsRange?: number;
}

export interface Counselor extends CharacterBase {
  lord?: Character;
}

export interface Squire extends CharacterBase {
  serverRange?: number;
  master?: Fighter;
}

export type Character = King & Fighter & Counselor & Squire;

export type CharacterType = 'king' | 'fighter' | 'counselor' | 'squire';
