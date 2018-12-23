import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-close',
  templateUrl: './modal-close.component.html',
  styleUrls: ['./modal-close.component.scss']
})
export class ModalCloseComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
