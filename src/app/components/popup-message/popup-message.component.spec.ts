import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupMessageComponent } from './popup-message.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

describe('PopupMessageComponent', () => {
  let component: PopupMessageComponent;
  let fixture: ComponentFixture<PopupMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMessageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [MatSnackBar]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
