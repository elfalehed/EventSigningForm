import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatfinanceComponent } from './statfinance.component';

describe('StatfinanceComponent', () => {
  let component: StatfinanceComponent;
  let fixture: ComponentFixture<StatfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatfinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
