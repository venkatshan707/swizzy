import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndResturantsComponent } from './food-and-resturants.component';

describe('FoodAndResturantsComponent', () => {
  let component: FoodAndResturantsComponent;
  let fixture: ComponentFixture<FoodAndResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
