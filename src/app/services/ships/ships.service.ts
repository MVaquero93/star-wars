import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(
    private http: HttpClient
  ) { }

  getStarshipsList(url = 'http://swapi.dev/api/starships/'): Observable<any> {
    return this.http.get(url)
  }
}
