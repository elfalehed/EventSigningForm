import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogModifyComponent } from './blog-modify.component';

describe('BlogModifyComponent', () => {
  let component: BlogModifyComponent;
  let fixture: ComponentFixture<BlogModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
