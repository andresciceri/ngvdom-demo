import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { VDomModule } from "ng-vdom";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockClassicComponent } from './components/clock-classic/clock-classic.component';
import { ClockVdomComponent } from './components/clock-vdom/clock-vdom.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { TopSearchFormComponent } from './components/top-search-form/top-search-form.component';
import { WatchesComponent } from './containers/watches/watches.component';
import { PokemonsComponent } from './containers/pokemons/pokemons.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockClassicComponent,
    ClockVdomComponent,
    TopNavBarComponent,
    AsideLeftComponent,
    TopSearchFormComponent,
    WatchesComponent,
    PokemonsComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VDomModule
  ],
  entryComponents: [TopSearchFormComponent, PokeCardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
