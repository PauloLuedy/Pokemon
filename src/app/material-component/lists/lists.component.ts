import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit{
  public pokemons:any
    constructor(){
    }
    ngOnInit() {
      let result:any = localStorage.getItem('pokemons'); 
      let conveert = JSON.parse(result)
      this.pokemons= conveert
    }

}
