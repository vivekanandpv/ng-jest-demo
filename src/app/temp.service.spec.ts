import { TestBed } from '@angular/core/testing';

import { TempService } from './temp.service';
import { PriceService } from './price.service';
import { lastValueFrom } from 'rxjs';

describe('TempService', () => {
  let service: TempService;

  //  declare the mock service
  let priceServiceMock: { getPrice: jest.Mock };

  beforeEach(() => {
    //  define the mock service
    priceServiceMock = {
      getPrice: jest.fn(),
    };

    //  make the mock service available in the DI system
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PriceService,
          useValue: priceServiceMock,
        },
      ],
    });
    service = TestBed.inject(TempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the sum of two numbers', () => {
    expect(service.add(4, 5)).toEqual(9);
  });

  it('should calculate the area of a circle with a non-negative radius', () => {
    expect(service.areaOfCircle(4)).toBeCloseTo(50.2654, 3);
  });

  it('should throw the error for negative radius', () => {
    expect(() => service.areaOfCircle(-3)).toThrowError('Negative radius');
  });

  it('should get the total price', () => {
    //  load (configure) the mock service
    priceServiceMock.getPrice.mockReturnValue([1, 2, 3]);
    expect(service.totalPrice()).toEqual(6);
  });

  it('should return a string asynchronously using observable', (done) => {
    service.getMessage().subscribe({
      next: (m) => {
        if (m === 'Good evening!') {
          done();
        }
      },
    });
  });

  it('should return a string asynchronously using promise', async () => {
    expect(await lastValueFrom(service.getMessage())).toEqual('Good evening!');
  });
});
