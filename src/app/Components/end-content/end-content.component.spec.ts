import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndContentComponent } from './end-content.component';

describe('EndContentComponent', () => {
  let component: EndContentComponent;
  let fixture: ComponentFixture<EndContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
