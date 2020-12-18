import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryparamsService {

  private launchYear = new BehaviorSubject('');
  selectedLaunchYear = this.launchYear.asObservable();

  private launchSuccessful = new BehaviorSubject('');
  selectedLaunchSuccessful = this.launchSuccessful.asObservable();

  private landSuccessful = new BehaviorSubject('');
  selectedLandSuccessful = this.landSuccessful.asObservable();

  constructor() { }

  updateLaunchYear(message: string) {
  this.launchYear.next(message);
  }

  updateLaunchSuccessful(message: string) {
  this.launchSuccessful.next(message);
  }

  updateLandSuccessful(message: string) {
    this.landSuccessful.next(message);
  }

}
