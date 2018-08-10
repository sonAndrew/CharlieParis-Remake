import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroImgComponent } from './Components/hero-img/hero-img.component';
import { CollectionHeadComponent } from './Components/collection-head/collection-head.component';
import { CollectionSliderComponent } from './Components/collection-slider/collection-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroImgComponent,
    CollectionHeadComponent,
    CollectionSliderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
