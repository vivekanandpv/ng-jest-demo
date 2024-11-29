import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  constructor() {}

  getPrice() {
    return [9, 7, 5];
  }
}
