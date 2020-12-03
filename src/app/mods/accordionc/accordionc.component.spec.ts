import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordioncComponent } from './accordionc.component';

describe('AccordioncComponent', () => {
  let component: AccordioncComponent;
  let fixture: ComponentFixture<AccordioncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordioncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
