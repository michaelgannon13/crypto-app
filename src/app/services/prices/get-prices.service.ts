import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPricesService {

  constructor(private http: HttpClient) { }

  // getLocation(lat: Coordinates, long: Coordinates) {
  //   return this.http.get(`${environment.weatherAPIBaseUrl}/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${environment.weatherAPIKey}`);
  // }

  getPrices(){
    return this.http.get('https://api.coinranking.com/v1/public/markets');
  }
}