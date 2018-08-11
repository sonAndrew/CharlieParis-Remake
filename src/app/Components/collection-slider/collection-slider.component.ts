import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-slider',
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit {

  collection:any = ['NOVELTIES', 'MEN', 'WOMAN'];
  images:any = [
    '../../../assets/Images/art-blur-brass.jpg',
    '../../../assets/Images/analogue-color-executive.jpg',
    '../../../assets/Images/analogue-antique-business.jpg'
  ]

  constructor() {}

  ngOnInit() {
  }

}
