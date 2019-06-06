import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './components/main/main.module';
import { ListModule } from './components/list/list.module';
import { FormModule } from './components/form/form.module';
import { ModalModule } from './components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PopupMessageModule } from './components/popup-message/popup-message.module';
import { ListComponent } from './components/list/list.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        ModalModule,
        MainModule,
        ListModule,
        FormModule,
        ToolbarModule,
        FlexLayoutModule,
        PopupMessageModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClient],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the App List', () => {
    const displayedColumns = ['robot', 'space', 'rock'];
    const data = [];
    for ( let x = 0; x < 20; x ++) {
      data.push({name: `Robot_${x}`, space: `Sobot_${x}`, email: `Rock_${x}`});
    }

    const fixture = TestBed.createComponent(ListComponent);
    const list: ListComponent = fixture.debugElement.componentInstance;

    list.displayedColumns = displayedColumns;
    list.list = data;

    fixture.detectChanges();

    const html: string = fixture.debugElement.nativeElement.innerHTML;
    const hasAllcolummns = displayedColumns
      .reduce( (value, column) => value && html.indexOf(column) > -1 , true);

    expect(list && hasAllcolummns).toBeTruthy();
  });

});
