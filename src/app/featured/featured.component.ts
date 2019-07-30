import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-component-one',
  template: `
    <p>
      Featured Module: 
      Token 1: {{state1}}
      Token 2: {{state2}}
    </p>
    <button (click)="changeState1()">Change State 1</button>
    <button (click)="changeState2()">Change State 2</button>
  `,
  styles: []
})
export class FeaturedComponent implements OnInit {
  state1;
  state2;
  constructor(private appState: AppStateService) { }

  ngOnInit() {
    this.appState.getState('state1').subscribe(state => this.state1 = state)
    this.appState.getState('state2').subscribe(state => this.state2 = state.time)
  }

  changeState1() {
    this.appState.setState('state1', Date.now(), true)
  }
  changeState2() {
    this.appState.setState('state2', { time: Date.now() }, true)
  }
}
