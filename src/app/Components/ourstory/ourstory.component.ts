import { Component, OnInit, Input } from '@angular/core';
//import { fade } from './animate.ts';


@Component({
  selector: 'app-ourstory',
  templateUrl: 'ourstory.component.html',
  styleUrls: ['./ourstory.component.scss'],
  //animations: fade
})
export class OurstoryComponent implements OnInit {
  // ourImages:any = [
  //   '../../../assets/Images/art-blur-brass.jpg'
  //   '../../../assets/Images/analogue-color-executive.jpg',
  //   '../../../assets/Images/analogue-antique-business.jpg'
  // ]

  constructor() { }

  // constructor(public name: string, public state = 'inactive') { }
  // toggleState() {
  //   this.state = this.state === 'active' ? 'inactive' : 'active';
  // }
  

  ngOnInit() {
  }

}
