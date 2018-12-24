import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'app-modal-content-detail,[app-modal-content-detail],[appModalContentDetail]'
})
export class ModalContentDetailDirective {

  constructor(public template: TemplateRef<any>) { }

}
