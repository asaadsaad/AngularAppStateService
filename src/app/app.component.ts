import { Component, OnInit } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/featured">Featured Module</a> 
    
    <div class="outlet">
      <router-outlet></router-outlet>
    </div>

    <p>Main App</p>
    <button (click)="changeState1()">Change State 1</button>
    <button (click)="changeState2()">Change State 2</button>
    <p>Token1: {{state1}}</p>
    <p>Token2: {{state2}}</p>
  `,
  styles: [
    `a {padding: 0 5px;}`,
    `.outlet {border: 1px solid #ccc; margin: 10px 0}`
  ]
})
export class AppComponent implements OnInit {
  state1 = null
  state2 = null

  constructor(private appState: AppStateService) {
    this.appState.initState(['state1', 'state2'])
  }

  ngOnInit() {
    this.appState.getState('state1').subscribe(state => this.state1 = state)
    this.appState.getState('state2').subscribe(({ time }) => this.state2 = time)
  }

  changeState1() {
    this.appState.setState('state1', Date.now(), true)
  }
  changeState2() {
    this.appState.setState('state2', { time: Date.now() }, true)
  }

}
