import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import { ModalTitleComponent } from './modal-title/modal-title.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalActionsComponent } from './modal-actions/modal-actions.component';
import { ModalCloseComponent } from './modal-close/modal-close.component';
import { ModalTitleDetailDirective } from './modal-title/modal-title-detail.directive';
import { ModalContentDetailDirective } from './modal-content/modal-content-detail.directive';
import { ModalActionsDetailDirective } from './modal-actions/modal-actions-detail.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalOverlayComponent,
    ModalTitleComponent,
    ModalContentComponent,
    ModalActionsComponent,
    ModalCloseComponent,
    ModalTitleDetailDirective,
    ModalContentDetailDirective,
    ModalActionsDetailDirective
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
    ModalCloseComponent,
    ModalTitleDetailDirective,
    ModalContentDetailDirective,
    ModalActionsDetailDirective
  ],
  providers: [MatDialog]
})
export class ModalModule { }
