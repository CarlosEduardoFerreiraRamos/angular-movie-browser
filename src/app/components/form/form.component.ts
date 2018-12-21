import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormBadgeComponent } from './form-badge/form-badge.component';
import { FormInputComponent } from './form-input/form-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ContentChildren(FormButtonComponent) buttons: QueryList<FormButtonComponent> = new QueryList<FormButtonComponent>();

  @ContentChildren(FormBadgeComponent) badges: QueryList<FormBadgeComponent> = new QueryList<FormBadgeComponent>();

  @ContentChildren(FormInputComponent) inputs: QueryList<FormInputComponent> = new QueryList<FormInputComponent>();

  constructor() { }

  ngOnInit() {
  }


}
