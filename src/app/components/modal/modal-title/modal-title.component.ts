import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { ModalTitleDetailDirective } from './modal-title-detail.directive';

@Component({
  selector: 'app-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.scss']
})
export class ModalTitleComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @ContentChild(ModalTitleDetailDirective) detail: ModalTitleDetailDirective;


  constructor() { }

  ngOnInit() {
  }

}
