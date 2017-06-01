import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursgeoComponent } from './toursgeo.component';

describe('ToursgeoComponent', () => {
  let component: ToursgeoComponent;
  let fixture: ComponentFixture<ToursgeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursgeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
