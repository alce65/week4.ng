import {
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Pokemon, PokemonDetails } from '../../../core/models/pokemon';
import { PokeStateService } from '../../../core/store/poke-state.service';

@Component({
  selector: 'isdi-poke-details',
  standalone: true,
  imports: [],
  template: `
    <h2 class="detail-title">
      <span>Detalles del Pokemon {{ pokeId }}:</span>
      <span class="detail-title__poke-name"> {{ pokeData?.name }} </span>
      <span class="poke-item__fav"></span>
    </h2>
    <div class="poke-detail">
      <ul #detailsList></ul>
    </div>
  `,
  styles: ``,
})
export class PokeDetailsComponent implements OnInit {
  private stateSrv = inject(PokeStateService);
  @Input({ required: true }) pokeId!: Pokemon['id'];
  @ViewChild('detailsList', { static: true })
  detailsList!: ElementRef<HTMLUListElement>;
  pokeData!: PokemonDetails | undefined;

  ngOnInit() {
    this.stateSrv.getPokeDetails(this.pokeId).subscribe((data) => {
      this.pokeData = data;
      const template = this.showPokeData(this.pokeData);
      this.detailsList.nativeElement.innerHTML = template;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showPokeData(poke: { [key: string]: any }) {
    let template = '';
    for (const key in poke) {
      if (Object.hasOwn(poke, key) && key !== 'name') {
        const value = poke[key];
        if (typeof value === 'object') {
          template += `
            <li>
              <details>
                <summary>${key}:</summary>
                <ul>${this.showPokeData(value)}</ul>
              </details>
            </li>
          `;
        } else {
          template += `<li><span>${key}</span>: ${value}</li>`;
        }
      }
    }
    return template;
  }
}
