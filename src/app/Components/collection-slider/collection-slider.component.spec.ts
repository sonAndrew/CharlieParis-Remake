import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSliderComponent } from './collection-slider.component';

describe('CollectionSliderComponent', () => {
  let component: CollectionSliderComponent;
  let fixture: ComponentFixture<CollectionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
