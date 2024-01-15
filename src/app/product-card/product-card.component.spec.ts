import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productCardComponent } from './product-card.component';

describe('productCardComponent', () => {
  let component: productCardComponent;
  let fixture: ComponentFixture<productCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [productCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(productCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
