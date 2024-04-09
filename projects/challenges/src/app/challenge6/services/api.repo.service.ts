import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { urlBase } from '../../app.config';
import { Pet } from '../models/pet.model';
import { addPetDTO, apiPetAddDTO, apiPetDTO } from '../models/pet.dto';

@Injectable({
  providedIn: 'root',
})
export class PetsApiRepoService {
  urlPets = new URL('pets', urlBase).toString();
  constructor(private http: HttpClient) {}

  getAll(): Observable<Pet[]> {
    return this.http.get<apiPetDTO[]>(this.urlPets, {}).pipe(
      map((apiPets) => {
        return apiPets.map((apiPet) => {
          const { image, adopter, ...rest } = apiPet;
          return {
            ...rest,
            imageUrl: image,
            careGiver: adopter,
          };
        });
      }),
    );
  }

  add(pet: addPetDTO): Observable<Pet> {
    const { imageUrl, careGiver, ...rest } = pet;

    const data: apiPetAddDTO = {
      ...rest,
      image: imageUrl,
      adopter: careGiver,
      isAdopted: false,
    };

    return this.http.post<apiPetDTO>(this.urlPets, data).pipe(
      map((apiPet) => {
        const { image, adopter, ...rest } = apiPet;
        return {
          ...rest,
          imageUrl: image,
          careGiver: adopter,
        };
      }),
    );
  }

  update(pet: Pet): Observable<Pet> {
    const url = this.urlPets + '/' + pet.id;
    return this.http.patch(url, pet) as Observable<Pet>;
  }

  delete(id: Pet['id']): Observable<Pet> {
    const url = this.urlPets + '/' + id;
    return this.http.delete(url) as Observable<Pet>;
  }
}
