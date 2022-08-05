import { HttpClient } from '@angular/common/http';
import { PokemonsService } from './../pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  searchText = '';
  getAllPokemons!: any;
  pokemon!: string;

  constructor(private pokeApi: PokemonsService, private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.pokemons();
    // this.buscar()
  }

  //detalhes do pokemon
  detailsPokemon(id: string) {
    this.router.navigate([`details/${id}`]);
  }

  //Buscar pokemons
  inputFilter() {
    let input, filter, matCard, h2, txtValue, i;
    input = document.getElementById('findPokemon') as any;
    filter = input?.value?.toLowerCase();
    matCard = document.getElementById('container') as HTMLElement;
    h2 = matCard.getElementsByTagName('h2');
    for (i = 0; i < h2?.length; i++) {
      let pokemon = document.querySelector('#pokemon' + i) as HTMLElement;
      txtValue = h2[i].textContent || h2[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        pokemon.style.display = '';
      } else {
        pokemon.style.display = 'none';
      }
    }
  }

  //Recebendo pokemons do service
  pokemons() {
    this.pokeApi
      .allPokemons()
      .pipe(
        take(1),
        map((data) => data.results)
      )
      .subscribe((data) => {
        this.getAllPokemons = data;
        console.log(this.getAllPokemons);
      });
  }


}
