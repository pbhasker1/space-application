import { Component, OnInit } from '@angular/core';
import { DataFilterService } from '../services/DataFilter.service';

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

  constructor(private dataFilterService: DataFilterService) { }

  ngOnInit(): void {
  }

  //This component helps in setting the filetr data to the observable in DataFilterService.
  //helps in filtering the data on the basis of launch year.
  getYearFilteredData(event): void {
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
    this.dataFilterService.updateLaunchYear(this.selectedYear);
  }

  //helps in filtering the data on the basis of launch status.  
  getLaunchFilteredData(event) :void{
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
    this.dataFilterService.updateLaunchSuccessful(this.launchSuccessful);
  } 
  
  //helps in filtering the data on the basis of landing status. 
  getLandingFilteredData(event) :void{
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
    this.dataFilterService.updateLandSuccessful(this.landingSuccessful);
  }

}
