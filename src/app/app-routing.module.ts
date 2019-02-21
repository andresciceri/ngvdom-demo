import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from "./containers/pokemons/pokemons.component";
import { WatchesComponent } from "./containers/watches/watches.component";

const routes: Routes = [
  {
    path: 'watches',
    component: WatchesComponent
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: '',
    redirectTo: 'watches',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
