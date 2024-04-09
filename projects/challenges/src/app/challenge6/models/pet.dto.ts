import { Pet } from './pet.model';

export type addPetDTO = Omit<Pet, 'id' | 'isAdopted'>;
// type addPetDTO = Pick<Pet, 'name' | 'breed' | 'imgUrl' | 'careGiver'>;

export type apiPetDTO = {
  id: string;
  name: string;
  breed: string;
  image: string;
  isAdopted: boolean;
  adopter: string;
};

export type apiPetAddDTO = {
  name: string;
  breed: string;
  image: string;
  isAdopted: boolean;
  adopter: string;
};
