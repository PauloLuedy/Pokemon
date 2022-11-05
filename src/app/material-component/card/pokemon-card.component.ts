import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/app/_model/Pokemon';
@Component({
  selector: 'app-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass' ,"/index.scss"],
})
export class CardComponent {
  @Input()
  public pokemon: Pokemon | undefined;
  public ispokemonFavorite: any


  isFavorite(): void {        
    this.ispokemonFavorite = localStorage.getItem('pokemons');
  }

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
