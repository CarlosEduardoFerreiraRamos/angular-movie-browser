import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormBadgeComponent } from './form-badge/form-badge.component';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations:
  [FormComponent,
    FormButtonComponent,
    FormBadgeComponent,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    FormComponent,
    FormButtonComponent,
    FormBadgeComponent,
    FormInputComponent]
})
export class FormModule { }
