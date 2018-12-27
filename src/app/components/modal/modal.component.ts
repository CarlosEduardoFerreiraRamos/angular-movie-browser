import { Component, OnInit, ContentChild, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';
import { ModalTitleComponent } from './modal-title/modal-title.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalActionsComponent } from './modal-actions/modal-actions.component';
import { ModalCloseComponent } from './modal-close/modal-close.component';
import { Observable, of } from 'rxjs';

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

  @Input()
  public set data$(data) {
    if (data) {
      this._data$ = data;
    }
  }

  private _data$: Observable<any>;

  public get data$(): Observable<any> {
    return this._data$;
  }

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpen(data$) {
    const dialogRef = this._dialog.open(ModalOverlayComponent, {
      width: '800px',
      height: '600px',
      data: {
        data$: data$ ? data$ : this.data$ || of('No value in data$'),
        titleTemplate: this.titleTemplate,
        contentTemplate: this.contentTemplate,
        actionsTemplate: this.actionsTemplate,
        closeTemplate: this.closeTemplate
      }
    });
  }

}
