import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordItComponent } from './dashbord-it.component';

describe('DashbordItComponent', () => {
  let component: DashbordItComponent;
  let fixture: ComponentFixture<DashbordItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
