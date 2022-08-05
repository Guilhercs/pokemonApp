import { DetailsComponent } from './details/details.component';
import { MemorygameComponent } from './memorygame/memorygame.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: 'memorygame',
    component: MemorygameComponent
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
