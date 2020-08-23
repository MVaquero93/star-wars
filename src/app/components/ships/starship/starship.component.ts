import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.sass']
})
export class StarshipComponent implements OnInit {

  @Input() starship

  constructor() { }

  ngOnInit(): void {
  }

  getStarshipId() {
    return this.starship.url?.split('/').filter((item) => item !== "").slice(-1)[0];
  }
}
