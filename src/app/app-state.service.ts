import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private appState = {}
  private state$ = new BehaviorSubject(this.appState)

  constructor() { }

  setState(key, value, persist) {
    this.appState[key] = value // in Memory
    this.state$.next(this.appState) // inform subscribers
    if (persist) {
      if (typeof value === "object") localStorage[key] = JSON.stringify(value)
      else localStorage[key] = value
    }
  }

  getState(key) {
    this.state$.next(this.appState)
    return this.state$.pipe(map(obj => obj[key]))
  }

}
