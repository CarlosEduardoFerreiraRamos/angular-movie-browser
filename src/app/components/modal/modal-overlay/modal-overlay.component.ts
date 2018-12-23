import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalTitleComponent } from '../modal-title/modal-title.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalActionsComponent } from '../modal-actions/modal-actions.component';
import { ModalCloseComponent } from '../modal-close/modal-close.component';

@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss']
})
export class ModalOverlayComponent implements OnInit {

  public titleTemplate: ModalTitleComponent;

  public contentTemplate: ModalContentComponent;

  public actionsTemplate: ModalActionsComponent;

  public closeTemplate: ModalCloseComponent;


  constructor(
    public dialogRef: MatDialogRef<ModalOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      const {
        titleTemplate,
        contentTemplate,
        actionsTemplate,
        closeTemplate
      } = data;

      this.titleTemplate = titleTemplate;
      this.contentTemplate = contentTemplate;
      this.actionsTemplate = actionsTemplate;
      this.closeTemplate = closeTemplate;
    }

  ngOnInit() {
  }

}
