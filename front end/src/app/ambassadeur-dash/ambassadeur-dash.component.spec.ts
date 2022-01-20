import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadeurDashComponent } from './ambassadeur-dash.component';

describe('AmbassadeurDashComponent', () => {
  let component: AmbassadeurDashComponent;
  let fixture: ComponentFixture<AmbassadeurDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbassadeurDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbassadeurDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
