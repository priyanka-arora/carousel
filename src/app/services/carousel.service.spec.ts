import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService],
      imports: [HttpModule],
    });
  });

  it('should be created.', inject([CarouselService], (service: CarouselService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array>.',
  inject([CarouselService], (carouselService) => {
    carouselService.fetchCarouselData().subscribe((Carousel) => {
      expect(Carousel.length).toBe(10);
    });
}));

});
