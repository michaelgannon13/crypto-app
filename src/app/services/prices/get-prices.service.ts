import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPricesService {

  constructor(private http: HttpClient) { }
  getCoinData(coinId, currency) {
    return this.http.get(`${environment.baseUrl}/v1/public/coin/${coinId}/history/5y?base=${currency}`);
  }
}
