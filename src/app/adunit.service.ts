import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(
    private http: HttpClient,
    private router: Router

    ) { }

  addAdUnit(value) {
      const obj = value;
      console.log('to add', value);
      
      // const obj = {
      //   unit_name: unit_name,
      //   unit_price: unit_price
      // };
      return this.http.post(`${this.uri}/add`, obj).toPromise().then((response) => {
        // .subscribe(res => console.log('Done'));
        
        console.log('Done', response);
        this.router.navigate(['/index']);
      })
  }

  getAdUnits() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editAdUnit(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateAdUnit(unit_name, unit_price, unit_currency_symbol, id) {

    const obj = {
      unit_name: unit_name,
      unit_price: unit_price,
      unit_currency_symbol: unit_currency_symbol
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteAdUnit(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
