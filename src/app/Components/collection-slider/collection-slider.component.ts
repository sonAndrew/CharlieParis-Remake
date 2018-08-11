import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-collection-slider',
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit {

  collection:any = ['NOVELTIES', 'MEN', 'WOMAN'];
  images: Array<string>;
  // [
  //   '../../../assets/Images/art-blur-brass.jpg',
  //   '../../../assets/Images/analogue-color-executive.jpg',
  //   '../../../assets/Images/analogue-antique-business.jpg'
  // ]

  constructor() {}

  ngOnInit() {
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)];
      return `../../../assets/{randomId}`;
    });
  }

}
