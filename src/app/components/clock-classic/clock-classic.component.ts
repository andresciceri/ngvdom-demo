import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-clock-classic',
  templateUrl: './clock-classic.component.html',
  styleUrls: ['./clock-classic.component.css']
})
export class ClockClassicComponent implements OnInit, OnDestroy {

  @Input() time: number;
  timerID: any;
  date: Date = new Date();
  numbers: number = 0;

  constructor() { }

  ngOnInit() : void{
    this.timerID = setInterval(() => this.tick(), this.time);
  }

  ngOnDestroy() {
    clearInterval(this.timerID);
  }

  tick() {
    this.date = new Date()
    this.numbers++;
  }

}
