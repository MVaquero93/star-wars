import { Component, OnInit } from '@angular/core';
import {ShipsService} from "../../services/ships/ships.service";
import {first, tap} from "rxjs/operators";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.sass']
})
export class ShipsComponent implements OnInit {

  starshipList: any[]
  apiResult
  requestError

  constructor(
    private shipsService: ShipsService
  ) {
    this.loadStarshipsPage()
  }

  ngOnInit(): void {
  }

  loadStarshipsPage() {
    this.shipsService.getStarshipsList()
      .pipe(first())
      .subscribe((result) => {
      this.apiResult = result
      this.starshipList =  result.results
    },
      (err) => this.requestError = true
    )
  }

  loadNextPage(url) {
    this.shipsService.getStarshipsList(url)
      .pipe(first())
      .subscribe((result) => {
      this.apiResult = result
      this.starshipList = this.starshipList.concat(result.results)
    },
      (err) => this.requestError = true)
  }

}
