import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  language:any = ["EN", "FR"];
  stories:string = "STORIES";
  help:any = ["HELP", "INSTRUCTIONS", "CUSTOMER SERVICE", "CONTACT US - CHARLIE", "WATCH PARIS"];
  offers = "24 Jours Pour Essayer"


  dropDownMenu(){
    let menuContentReg = document.getElementById('menuContent');

    if(menuContentReg.style.display === "none"){
      menuContentReg.style.display = "block";
    } else{
      menuContentReg.style.display = "none";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
