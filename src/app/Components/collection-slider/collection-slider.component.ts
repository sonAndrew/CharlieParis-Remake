import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-slider',
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit {

  collection:any = ['NOVELTIES', 'MEN', 'WOMAN'];
  images:any = [
    '../../../assets/Images/Slider-Images/bastille-b46.jpg',
    '../../../assets/Images/Slider-Images/bastille.jpg',
    '../../../assets/Images/Slider-Images/horizon.jpg',
    '../../../assets/Images/Slider-Images/gr-bleu.jpg',
    '../../../assets/Images/Slider-Images/bastille-b46 (1).jpg'
  ]

  constructor() {}

  ngOnInit() {
  }

}
