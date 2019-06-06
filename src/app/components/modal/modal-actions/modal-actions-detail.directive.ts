import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'app-modal-actions-detail,[app-modal-actions-detail],[appModalActionsDetail]'
})
export class ModalActionsDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
