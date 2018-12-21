import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-badge',
  templateUrl: './form-badge.component.html',
  styleUrls: ['./form-badge.component.scss']
})
export class FormBadgeComponent implements OnInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
