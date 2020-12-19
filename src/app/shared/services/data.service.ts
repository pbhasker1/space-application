import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {

   }

   getSpaceFlightData(params?) :Observable<Object>{
     if(params){
      return this.httpClient.get<Object>(environment.baseUrl, {
        params: params
      });
     }else{
      return this.httpClient.get<Object>(environment.baseUrl, {
        params: {
          limit: '100'
        }
      });
     }
   }
}
