import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  generalResults(): Observable<any>{
    const endPoint = 'https://api.covid19api.com/summary';
    return this.http.get(endPoint).pipe( map(res =>{
      return res["Global"];
    }));
  }

  countryResults(): Observable<any>{
    const endPoint = 'https://api.covid19api.com/summary';
    return this.http.get(endPoint).pipe(map(res=>{
      return res["Countries"];
    }))
  }

  spainResults(): Observable<any>{
    return this.http.get("https://api.covid19api.com/summary")
      .pipe( map(res =>
        res["Countries"].filter( country => 
          country.Country === 'Spain')
      )
    )
  }
}
