import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHeadComponent } from './collection-head.component';

describe('CollectionHeadComponent', () => {
  let component: CollectionHeadComponent;
  let fixture: ComponentFixture<CollectionHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
