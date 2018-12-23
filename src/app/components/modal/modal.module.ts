import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import { ModalTitleComponent } from './modal-title/modal-title.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalActionsComponent } from './modal-actions/modal-actions.component';
import { ModalCloseComponent } from './modal-close/modal-close.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalOverlayComponent,
    ModalTitleComponent,
    ModalContentComponent,
    ModalActionsComponent,
    ModalCloseComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [ModalOverlayComponent],
  exports: [
    ModalComponent,
    ModalTitleComponent,
    ModalContentComponent,
    ModalActionsComponent,
    ModalCloseComponent
  ],
  providers: [MatDialog]
})
export class ModalModule { }
