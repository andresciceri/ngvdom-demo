import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',  
  styleUrls: ['./top-search-form.component.css']
})
export class TopSearchFormComponent {  
  @Output() action = new EventEmitter();
}
