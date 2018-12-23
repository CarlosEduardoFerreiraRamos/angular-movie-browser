import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.scss']
})
export class ModalTitleComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
