import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.spaceXdata.com/v3/launches";

  constructor(private httpClient: HttpClient) {

   }

   getSpaceFlightData(params?){
     if(params){
      return this.httpClient.get(this.url, {
        params: params
      });
     }else{
      return this.httpClient.get(this.url, {
        params: {
          limit: '100'
        }
      });
     }
   }
}
