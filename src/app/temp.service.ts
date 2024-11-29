import { inject, Injectable } from '@angular/core';
import { PriceService } from './price.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  private priceService = inject(PriceService);

  constructor() {}

  add(a: number, b: number) {
    return a + b;
  }

  areaOfCircle(r: number) {
    if (r < 0) {
      throw new Error('Negative radius');
    }

    return Math.PI * r * r;
  }

  totalPrice() {
    let total = 0;
    this.priceService.getPrice().forEach((p) => (total += p));

    return total;
  }

  getMessage() {
    return of('Good evening!');
  }
}
