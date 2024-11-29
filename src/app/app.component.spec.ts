import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-testid="header"]')?.textContent
    ).toContain('Angular Testing');
  });

  it('should render initial counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-testid="p-tag"]')?.textContent
    ).toContain('Counter: 0');
  });

  it('should render incremented counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const incrementButton = compiled.querySelector(
      '[data-testid="increment"]'
    ) as HTMLButtonElement;
    incrementButton.click();
    fixture.detectChanges();
    expect(
      compiled.querySelector('[data-testid="p-tag"]')?.textContent
    ).toContain('Counter: 1');
  });

  it('should render decremented counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const decrementButton = compiled.querySelector(
      '[data-testid="decrement"]'
    ) as HTMLButtonElement;
    decrementButton.click();
    fixture.detectChanges();
    expect(
      compiled.querySelector('[data-testid="p-tag"]')?.textContent
    ).toContain('Counter: -1');
  });
});
