import { Component, inject } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { addPetDTO } from '../../models/pet.dto';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form class="form-container" [formGroup]="formGroup" (ngSubmit)="addPet()">
      <input
        type="text"
        class="form-input"
        placeholder="Name"
        formControlName="name"
      />
      <input
        type="text"
        class="form-input"
        placeholder="Breed"
        formControlName="breed"
      />
      <input
        type="text"
        class="form-input"
        placeholder="Image Url"
        formControlName="imageUrl"
      />
      <input
        type="text"
        class="form-input"
        placeholder="Caregiver"
        formControlName="careGiver"
      />
      <button type="submit">Add Pet</button>
    </form>
  `,
  styles: `
    .form-container {
      display: flex;
      flex-direction: column;
      margin-inline: 2.5rem;
      gap: 0.5rem;
    }
  `,
})
export class AddFormComponent {
  private fb = inject(FormBuilder);
  petsService = inject(PetsService);
  formGroup = this.fb.group({
    name: '',
    breed: '',
    imageUrl: '',
    careGiver: '',
  });

  addPet() {
    const data: addPetDTO = {
      name: this.formGroup.get('name')?.value as string,
      breed: this.formGroup.get('breed')?.value as string,
      imageUrl: this.formGroup.get('imageUrl')?.value as string,
      careGiver: this.formGroup.get('careGiver')?.value as string,
    };
    this.petsService.addPet(data);
    this.formGroup.reset();
  }
}
