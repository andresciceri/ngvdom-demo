import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { createElement as h, Renderable } from 'ng-vdom'

@Component({
  selector: 'app-clock-vdom',
  template: '',
  styleUrls: ['./clock-vdom.component.css']
})
export class ClockVdomComponent extends Renderable implements OnInit, OnDestroy {

  @Input() time: number;
  timerID: any;
  date: Date = new Date();
  numbers: number = 0;

  ngOnInit(): void {
    this.timerID = setInterval(() => this.tick(), this.time)
  }

  ngOnDestroy(): void {
    clearInterval(this.timerID)
  }

  tick() {
    this.date = new Date();
    this.numbers++;
  }

  render(){
    return (
      h('div', null,
        h('h2', null, 'It is ', this.date.toLocaleTimeString(), ','),
        h('h3', null, 'Numbers ', this.numbers, '.'))
    )
  }

}
