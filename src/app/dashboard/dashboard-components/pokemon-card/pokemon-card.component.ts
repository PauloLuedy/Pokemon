import { Component, Input } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import {
  getPokemonImage,
  getPokemonNumber,
  Pokemon,
} from "src/app/_model/Pokemon";
@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.sass", "/index.scss"],
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon | undefined;
  color: ThemePalette = "accent";
  checked = false;
  disabled = false;
  active = 0;
  onFavoriteClick(pokeItem: Pokemon): void {
    this.disabled = !this.disabled;       
    let favorites = JSON.parse(localStorage.getItem("pokemons") || "[]");

    let index = favorites.findIndex(
      (x: { number: number }) => x.number === pokeItem.number
    );

    const IsLocalStorage = index != -1;
    if (IsLocalStorage && this.disabled == false) {
      favorites.splice(index, 1);
    } else {
      favorites.push(pokeItem);
    }

    localStorage.setItem(`pokemons`, JSON.stringify(favorites));
  }


  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
