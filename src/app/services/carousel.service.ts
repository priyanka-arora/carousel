import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarouselService {

  constructor(private http: Http) { }

  /**
   * This method is going to fetch data from server and returns an observable array
   */
  fetchCarouselData(): Observable<any> {
    const url = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo&page=1&per_page=6';
    return this.http.get(url).map(response => response.json());
  }

}
