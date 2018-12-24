import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'app-modal-title-detail,[app-modal-title-detail],[appModalTitleDetail]'
})
export class ModalTitleDetailDirective {

  constructor(public template: TemplateRef<any>) { }

}
