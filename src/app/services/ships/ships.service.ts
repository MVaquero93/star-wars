import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpClientService} from "../cache/http-client.service";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(
    private httpService: HttpClientService
  ) { }

  getStarshipsList(url = 'http://swapi.dev/api/starships/'): Observable<any> {
    return this.httpService.get({url, cacheMins: 5})
  }
}
