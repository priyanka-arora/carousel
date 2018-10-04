import { Component, AfterViewInit, Input, OnInit, HostListener } from '@angular/core';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  current = {};
  visibleSlides = [];
  isMobileView = true;
  slidesData: any;
  slideIndex = 0;
  carouselSize = 5;

  /**
   * Set the visibility of control on window resize
   * @param {resize'} 'window    window resize event
   * @param {[event]}  '$event']) onWindowResize( event object
   */
  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.checkDevice();
  }

  constructor(private carouselService: CarouselService) {

  }

  /**
   * Initialize the component and set the flag based on the size
   */
  ngOnInit() {
    this.checkDevice();
  }

  /**
   * Set the flag for mobile device
   */
  checkDevice() {
    if (window.innerWidth < 769) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  /**
   * Once component initialized fetch the carousel data from the service and start the slide show
   */
  ngAfterViewInit() {
    this.carouselService.fetchCarouselData()
      .subscribe(data => {
        this.slidesData = data.hits;
        this.showSlides(this.slideIndex);
        this.setVisibleSlides(0);
      }, (err) => { console.log(err) });
  }

  /**
   * Set the slide to show in the slider
   * @param {[number]} n current index of the slide
   */
  showSlides(n) {
    if (n > this.slidesData.length - 1) { this.slideIndex = 0 }
    if (n < 0) { this.slideIndex = this.slidesData.length - 1 }

    this.current = this.slidesData[this.slideIndex]
    if (!this.isMobileView) {
      this.setVisibleSlides(this.slideIndex);
    }
  }

  /**
   * Set the slide images for desktop view. This method is going to set 5 images at a time based upon the index
   * @param {[number]} n current index of the slide
   */
  setVisibleSlides(n) {
    const arrLength = this.slidesData.length;
    this.visibleSlides = [];
    for (let j = 0; j < this.carouselSize; j++) {
      this.visibleSlides.push(this.slidesData[(n + j) % arrLength])
    }
  }

  /**
   * On click of previous slide button set the previous slide to slider
   */
  prevSlide() {
    this.showSlides(this.slideIndex -= 1);
  }

  /**
   * On click of next slide button set the next slide to slider
   */
  nextSlide() {
    this.showSlides(this.slideIndex += 1);
  }
}
