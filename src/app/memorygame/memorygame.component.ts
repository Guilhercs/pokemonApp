import { PokemonsService } from './../pokemons.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css'],
})
export class MemorygameComponent implements OnInit {
  backImage =
    'https://http2.mlstatic.com/D_NQ_NP_960544-MLB44264771896_122020-V.jpg';
  baralho = [
    {
      nome: 'pikachu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
      hiddenCard: true,
      id: 0,
    },
    {
      nome: 'bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      hiddenCard: true,
      id: 1,
    },
    {
      nome: 'charmeleon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
      hiddenCard: true,
      id: 2,
    },
    {
      nome: 'caterpie',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
      hiddenCard: true,
      id: 3,
    },
    {
      nome: 'squirtle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
      hiddenCard: true,
      id: 4,
    },
    {
      nome: 'arbok',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg',
      hiddenCard: true,
      id: 5,
    },
    {
      nome: 'pikachu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
      hiddenCard: true,
      id: 6,
    },
    {
      nome: 'bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      hiddenCard: true,
      id: 7,
    },
    {
      nome: 'charmeleon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
      hiddenCard: true,
      id: 8,
    },
    {
      nome: 'caterpie',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
      hiddenCard: true,
      id: 9,
    },
    {
      nome: 'squirtle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
      hiddenCard: true,
      id: 10,
    },
    {
      nome: 'arbok',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg',
      hiddenCard: true,
      id: 11,
    },
  ];
  ponto = 0;
  escolhidas: any[] = [];
  level: string = 'switch';
  carta = {
    nome: '',
    img: '',
    hiddenCard: true,
    id: 0,
  };
  baralhoTeste!: Object;
  idImage!: number;
  constructor(private http: HttpClient, private pokeApi: PokemonsService) {}
  ngOnInit(): void {
    // this.memoryImages();
  }

  escolherCarta(index: number) {
    let escolhida = this.baralho.filter((carta) => carta.id == index);
    escolhida[0].hiddenCard = false;

    this.escolhidas.push(escolhida[0]);
    if (this.escolhidas.length == 2) {
      setTimeout(() => {
        if (this.escolhidas[0].nome == this.escolhidas[1].nome) {
          this.ponto++;
        } else {
          //this.ponto--;
          let primeiraCarta = this.baralho.filter(
            (carta) => carta.id == this.escolhidas[0].id
          );
          primeiraCarta[0].hiddenCard = true;
          let segundaCarta = this.baralho.filter(
            (carta) => carta.id == this.escolhidas[1].id
          );
          segundaCarta[0].hiddenCard = true;
        }
        if (this.ponto == this.baralho.length / 2) {
          alert('Você conseguiu!');
        }
        this.escolhidas = [];
      }, 100);
    }
    return this.escolherCarta
  }


  embaralhar() {
    this.baralho = this.baralho.sort(() => Math.random() - 0.5);
    // this.baralho = [];
  }


}
