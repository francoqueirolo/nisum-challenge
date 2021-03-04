import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from '../interfaces/Currency.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyList(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://www.indecon.online/last');
  }
}
