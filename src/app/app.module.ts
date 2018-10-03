import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselService } from './services/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
