import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { ModalActionsDetailDirective } from './modal-actions-detail.directive';

@Component({
  selector: 'app-modal-actions',
  templateUrl: './modal-actions.component.html',
  styleUrls: ['./modal-actions.component.scss']
})
export class ModalActionsComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @ContentChild(ModalActionsDetailDirective) detail: ModalActionsDetailDirective;

  constructor() { }

  ngOnInit() {
  }

}
