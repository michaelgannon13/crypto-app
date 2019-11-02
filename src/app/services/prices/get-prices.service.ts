import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPricesService {

  constructor(private http: HttpClient) { }
  getBTC(){
    return this.http.get('https://api.coinranking.com/v1/public/coin/1?base=EUR&timePeriod=7d');
  }
}
