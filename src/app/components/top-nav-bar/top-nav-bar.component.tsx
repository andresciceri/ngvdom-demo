import { Component, OnInit } from '@angular/core';
import { Renderable, createElement } from "ng-vdom";
import { TopSearchFormComponent } from "../top-search-form/top-search-form.component";

const React = {
  createElement
}

@Component({
  selector: 'app-top-nav-bar',
  template: '',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent extends Renderable {


  print = () => { console.log('triggered') };

  render() {
    return (
      <header className="pokeNavBar row align-items-center">
        <div className="col-6">
          <a className="toggle-sidebar"> <i className="fa fa-bars"> </i></a>
          <h1>Demos ngVDOM </h1>
        </div>
        <div className="col-6 row align-items-center">
          <TopSearchFormComponent             
            onAction={this.print}
            className="col-6">              
          </TopSearchFormComponent>
        </div>
      </header>
    )
  }  

}
