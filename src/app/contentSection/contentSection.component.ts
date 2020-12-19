import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { DataFilterService } from '../shared/services/DataFilter.service';

@Component({
  selector: 'app-contentSection',
  templateUrl: './contentSection.component.html',
  styleUrls: ['./contentSection.component.scss']
})

export class ContentsectionComponent implements OnInit {
  flights: {name: String, flightNumber: Number, icon_url: String, missionId:String[], year: String, landSuccess: boolean, launchSuccess:boolean}[] = [];
  selectedYear = "";
  isLaunchSuccessful ="";
  isLandingSuccessful = "";

  constructor(private data: DataService, private dataFilterService: DataFilterService) { 
    this.getFlightData();
  }

  ngOnInit(): void {
    //Subscription is made to differnt observable to notice any change in filter parameters.
    this.dataFilterService.selectedLaunchYear.subscribe((val)=>{
      this.selectedYear = val;
      this.getFlightData();
    });

    this.dataFilterService.selectedLaunchSuccessful.subscribe((val)=>{
      this.isLaunchSuccessful = val;
      this.getFlightData();
    });

    this.dataFilterService.selectedLandSuccessful.subscribe((val)=>{
      this.isLandingSuccessful = val;
      this.getFlightData();
    });   
  }


  //This method makes the api call to fetch the required data from the server.
  getFlightData(): void{
    const json = {
      limit: 100,
      ...(this.isLaunchSuccessful !== "")
        ? { launch_success: this.isLaunchSuccessful.toLocaleLowerCase() }
        : {},
        ...(this.isLandingSuccessful !== "")
        ? { land_success: this.isLandingSuccessful.toLocaleLowerCase() }
        : {},
        ...(this.selectedYear !== "")
        ? { launch_year: this.selectedYear }
        : {} 
    }

    this.data.getSpaceFlightData(json).subscribe((response: any[])=>{
      this.flights = [];
      response.forEach((elem)=> {
        let obj = Object.assign({
          name : elem.mission_name,
          flightNumber: elem.flight_number, 
          icon_url: elem.links?.mission_patch_small,
          missionId: elem.mission_id, 
          year: elem.launch_year, 
          launchSuccess: elem.launch_success,
          landSuccess: elem.launch_success
        })
        this.flights.push(obj);
      })
    }, error =>{
      this.flights = [];
    })
  }

}
