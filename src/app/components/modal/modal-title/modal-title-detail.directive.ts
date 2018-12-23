import { Directive, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appModalTitleDetail]'
})
export class ModalTitleDetailDirective {

  constructor(public template: TemplateRef<any>) { }

}
