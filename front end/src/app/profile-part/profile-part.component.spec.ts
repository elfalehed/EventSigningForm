import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePartComponent } from './profile-part.component';

describe('ProfilePartComponent', () => {
  let component: ProfilePartComponent;
  let fixture: ComponentFixture<ProfilePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
