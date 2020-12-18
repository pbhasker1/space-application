import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { QueryparamsService } from '../services/queryparams.service';

@Component({
  selector: 'app-contentsection',
  templateUrl: './contentsection.component.html',
  styleUrls: ['./contentsection.component.scss']
})
export class ContentsectionComponent implements OnInit {
  flights: {name: String, flightNumber: Number, icon_url: String, missionId:String[], year: String, landSuccess: boolean, launchSuccess:boolean}[] = [];
  selectedYear = "";
  isLaunchSuccessful ="";
  isLandingSuccessful = "";

  constructor(private data: DataService, private queryParamsService: QueryparamsService) { 
    this.getFlightData();
  }

  ngOnInit(): void {
    this.queryParamsService.selectedLaunchYear.subscribe((val)=>{
      this.selectedYear = val;
      this.getFlightData();
    });

    this.queryParamsService.selectedLaunchSuccessful.subscribe((val)=>{
      this.isLaunchSuccessful = val;
      this.getFlightData();
    });

    this.queryParamsService.selectedLandSuccessful.subscribe((val)=>{
      this.isLandingSuccessful = val;
      this.getFlightData();
    });

    
  }

  getFlightData(){
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
      console.log(response);
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
