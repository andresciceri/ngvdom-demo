import { Component, OnInit, Injector } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { createElement, Renderable } from 'ng-vdom';
import { PokeCardComponent } from "../../components/poke-card/poke-card.component";
import { IPokeList } from "../../models";

const React = {
  createElement,
}

@Component({
  selector: 'app-pokemons',
  //templateUrl: './pokemons.component.html',
  template: '',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent extends Renderable implements OnInit {

  title: string = 'Listado de Pokemons';
  pokeList: IPokeList;

  constructor(private pokeService: PokemonsService, injector: Injector) {
    super(injector);
   }

  ngOnInit() {
    this.pokeService.list()
      .subscribe(
        list => {
          this.pokeList = list;
          this.pokeList.results = this.pokeList.results.slice(0, 50);
        }
      );
  }

  get pokemons() {
    return this.pokeList;
  }

  render(){
    return (             
      <div className="row" id="pokemons">    
        <h1>{this.title}</h1>   
        <Cards list={this.pokeList}/>
      </div>      
    )
  }    

}

function Cards(props: {list: IPokeList}) {
  const { list } = props
  return list && list.results.length > 0 && (
    <div className="row">
      {
        list.results.map((item) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <PokeCardComponent poke={item}></PokeCardComponent>
          </div>
        ))
      }
    </div>      
  )
}