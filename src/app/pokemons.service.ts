import { map, tap, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  // baseGifs = `https://projectpokemon.org/images/normal-sprite/pikachu.gif`
  baseUrl = `https://pokeapi.co/api/v2/pokemon`;
  baseImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world`;
  constructor(private http: HttpClient) {}

  allPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?limit=250&offset=0.`).pipe(
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  detailsPokemon(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`).pipe(map(data => data));
  }

  getImages(id: number) {
    return this.http.get(`${this.baseImage}/${id}.svg`);
  }

  // getGifs(name: string) {
  //   this.http.get(`${this.baseGifs}/${name}.gif`)
  // }
}

