import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupMessageComponent } from './popup-message.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [PopupMessageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [PopupMessageComponent],
  providers: [MatSnackBar]
})
export class PopupMessageModule { }
