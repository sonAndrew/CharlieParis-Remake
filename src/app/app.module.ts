import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CollectionHeadComponent } from './Components/collection-head/collection-head.component';
import { CollectionSliderComponent } from './Components/collection-slider/collection-slider.component';
import { OurstoryComponent } from './Components/ourstory/ourstory.component';
import { EndContentComponent } from './Components/end-content/end-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionHeadComponent,
    CollectionSliderComponent,
    OurstoryComponent,
    EndContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
