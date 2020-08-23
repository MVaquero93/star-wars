import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.sass']
})
export class StarshipListComponent implements OnInit {

  @Input() starshipList

  constructor(
  ) {
  }

  ngOnInit(): void {
    console.log(this.starshipList)
  }

}
