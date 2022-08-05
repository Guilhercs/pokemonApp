import { PokemonsService } from './../pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idPokemon!: string;
  poke: any;
  namePokemon: any;

  constructor(
    private pokeApi: PokemonsService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idPokemon = this.activateRoute.snapshot.params['name'];
    this.idPokemons();
    console.log(this.idPokemon);
  }

  idPokemons() {
    this.pokeApi.detailsPokemon(this.idPokemon).subscribe((pokemonApi) => {
      this.poke = pokemonApi;
      console.log(this.poke);
    })
  }

  backToPokemonList() {
    this.router.navigate([`/pokemons`])
  }

}
