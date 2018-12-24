import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { ModalContentDetailDirective } from './modal-content-detail.directive';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @ContentChild(ModalContentDetailDirective) detail: ModalContentDetailDirective;

  constructor() { }

  ngOnInit() {
  }

}
