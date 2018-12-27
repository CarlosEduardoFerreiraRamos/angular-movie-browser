import { Component, OnInit, ContentChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormBadgeComponent } from './form-badge/form-badge.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormService } from './form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ContentChildren(FormButtonComponent) buttons: QueryList<FormButtonComponent> = new QueryList<FormButtonComponent>();

  @ContentChildren(FormBadgeComponent) badges: QueryList<FormBadgeComponent> = new QueryList<FormBadgeComponent>();

  @ContentChildren(FormInputComponent) inputs: QueryList<FormInputComponent> = new QueryList<FormInputComponent>();

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() badgeClick: EventEmitter<any> = new EventEmitter<any>();

  public get data$() {
    return this._service.data$;
  }

  constructor(private _service: FormService) { }

  ngOnInit() {
    this._service.setData({});
  }

  public onValueChange($event): void {
    if ($event && [37, 38, 39, 40].indexOf($event.keyCode) === -1) {
      this.emitData(this.valueChange);
    }
  }

  public onButtonClick(): void {
    this.emitData(this.buttonClick);
  }

  public onBadgeClick(): void {
    this.emitData(this.badgeClick);
  }

  public onSubmit(): void {
    this.emitData(this.submit);
  }

  private emitData(emitter: EventEmitter<Observable<any>>): void {
    emitter.emit(this.data$);
  }



}
