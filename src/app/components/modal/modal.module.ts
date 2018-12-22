import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';
import { MatDialogModule, MatDialog } from '@angular/material';

@NgModule({
  declarations: [ModalComponent, ModalOverlayComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [ModalOverlayComponent],
  exports: [ModalComponent],
  providers: [MatDialog]
})
export class ModalModule { }
