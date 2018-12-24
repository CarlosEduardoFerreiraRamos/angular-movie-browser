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
import { FormService } from './form.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
  [
    FormComponent,
    FormButtonComponent,
    FormBadgeComponent,
    FormInputComponent
  ],
  imports: [
    FormsModule,
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
    FormInputComponent
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }
