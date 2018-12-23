import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
