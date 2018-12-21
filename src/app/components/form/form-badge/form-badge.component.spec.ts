import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBadgeComponent } from './form-badge.component';

describe('FormBadgeComponent', () => {
  let component: FormBadgeComponent;
  let fixture: ComponentFixture<FormBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
