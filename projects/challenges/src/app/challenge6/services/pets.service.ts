/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, inject, signal } from '@angular/core';
import { Pet } from '../models/pet.model';
import { addPetDTO } from '../models/pet.dto';
import { PetsApiRepoService } from './api.repo.service';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private repo = inject(PetsApiRepoService);
  private _petState = signal<Pet[]>([]);
  public petState = this._petState.asReadonly();

  constructor() {
    this.loadPets();
  }

  loadPets(): void {
    this.repo.getAll().subscribe((pets) => {
      this._petState.update(() => pets);
    });
  }

  addPet(data: addPetDTO): void {
    this.repo.add(data).subscribe((pet) => {
      this._petState.update((pets) => [...pets, pet]);
    });
  }
}
