import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private appState = {}
  private state$;

  constructor() {
    this.state$ = new BehaviorSubject(this.appState)
  }

  initState() { // Restore state from localStorage 
    Object.keys(localStorage).forEach(key => {
      if (localStorage[key][0] === "{") this.appState[key] = JSON.parse(localStorage[key])
      else this.appState[key] = localStorage[key]
    })
    this.state$.next(this.appState) // inform subscribers
  }

  setState(key: string, value: any, persist: boolean = false) {
    this.appState[key] = value // in Memory
    this.state$.next(this.appState) // inform subscribers
    if (persist) {
      if (typeof value === "object") localStorage[key] = JSON.stringify(value)
      else localStorage[key] = value
    }
  }

  getState(key: string) {
    return this.state$.pipe(map(obj => obj[key]))
  }

}
