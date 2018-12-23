import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-actions',
  templateUrl: './modal-actions.component.html',
  styleUrls: ['./modal-actions.component.scss']
})
export class ModalActionsComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
