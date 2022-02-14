import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmbassadeurComponent } from './add-ambassadeur.component';

describe('AddAmbassadeurComponent', () => {
  let component: AddAmbassadeurComponent;
  let fixture: ComponentFixture<AddAmbassadeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAmbassadeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmbassadeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
