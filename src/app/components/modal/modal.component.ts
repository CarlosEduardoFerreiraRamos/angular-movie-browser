import { Component, OnInit, ContentChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';
import { ModalTitleComponent } from './modal-title/modal-title.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalActionsComponent } from './modal-actions/modal-actions.component';
import { ModalCloseComponent } from './modal-close/modal-close.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ContentChild(ModalTitleComponent) titleTemplate: ModalTitleComponent;

  @ContentChild(ModalContentComponent) contentTemplate: ModalContentComponent;

  @ContentChild(ModalActionsComponent) actionsTemplate: ModalActionsComponent;

  @ContentChild(ModalCloseComponent) closeTemplate: ModalCloseComponent;

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpen() {
    const dialogRef = this._dialog.open(ModalOverlayComponent, {
      width: '400px',
      height: '400px',
      data: {
        titleTemplate: this.titleTemplate,
        contentTemplate: this.contentTemplate,
        actionsTemplate: this.actionsTemplate,
        closeTemplate: this.closeTemplate
      }
    });
  }

}
