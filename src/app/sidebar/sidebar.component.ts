import { Component, OnInit } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';
import { QueryparamsService } from '../services/queryparams.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  years=[ 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  landingOptions= ["True", "False"];
  selectedYear= "";
  launchSuccessful= "";
  landingSuccessful= "";

  constructor(private dataService: QueryparamsService) { }

  ngOnInit(): void {
  }

  getYearFilteredData(event) {
    let list = event.target.parentElement.getElementsByClassName("active-button");
    for(let item of list){
      item.classList.remove("active-button");
    }
    if(this.selectedYear == event.target?.innerHTML){
      this.selectedYear = "";
    }else {
      this.selectedYear = event.target?.innerHTML;
      event.target?.classList.add("active-button");
    }
    this.dataService.updateLaunchYear(this.selectedYear);
  }

  getLaunchFilteredData(event) {
    let list = event.target.parentElement.getElementsByClassName("active-button");
    for(let item of list){
      item.classList.remove("active-button");
    }
    if(this.launchSuccessful == event.target?.innerHTML){
      this.launchSuccessful = "";
    }else {
      this.launchSuccessful = event.target?.innerHTML;
      event.target?.classList.add("active-button");
    }   
    this.dataService.updateLaunchSuccessful(this.launchSuccessful);
  } 
  
  getLandingFilteredData(event) {
    let list = event.target.parentElement.getElementsByClassName("active-button");
    for(let item of list){
      item.classList.remove("active-button");
    }  
    if(this.landingSuccessful == event.target?.innerHTML) {
      this.landingSuccessful = "";
    }else {
      this.landingSuccessful = event.target?.innerHTML;
      event.target?.classList.add("active-button");
    }   
    this.dataService.updateLandSuccessful(this.landingSuccessful);
  }

}
