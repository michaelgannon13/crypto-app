import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  getCoins(){
    return this.http.get('https://api.coinranking.com/v1/public/coins');
  }
}
