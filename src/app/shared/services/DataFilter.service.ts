import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Observables for different filter parameters.
export class DataFilterService {

  private launchYear = new BehaviorSubject('');
  selectedLaunchYear = this.launchYear.asObservable();

  private launchSuccessful = new BehaviorSubject('');
  selectedLaunchSuccessful = this.launchSuccessful.asObservable();

  private landSuccessful = new BehaviorSubject('');
  selectedLandSuccessful = this.landSuccessful.asObservable();

  constructor() { }

  updateLaunchYear(message: string) :void {
    this.launchYear.next(message);
  }

  updateLaunchSuccessful(message: string) :void{
    this.launchSuccessful.next(message);
  }

  updateLandSuccessful(message: string) :void{
    this.landSuccessful.next(message);
  }

}
