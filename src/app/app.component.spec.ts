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
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupMessageModule } from './components/popup-message/popup-message.module';
import { ListComponent } from './components/list/list.component';

const displayedColumns = ['robot', 'space', 'rock'];
let listFixture;
let list: ListComponent;

function generateMokData() {
  const data = [];
  for ( let x = 0; x < 20; x ++) {
    data.push({name: `Robot_${x}`, space: `Sobot_${x}`, email: `Rock_${x}`});
  }
  return data;
}


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
    }).compileComponents().then( () => {
      listFixture = TestBed.createComponent(ListComponent);
      list = listFixture.debugElement.componentInstance;
      list.displayedColumns = displayedColumns;
      list.list = generateMokData();
      listFixture.detectChanges();
    });
  }));

  it('VIEW layer: should render the App List', () => {
    expect(list).toBeTruthy();
  });

  it('VIEW layer: should have columns', () => {
    const html: string = listFixture.debugElement.nativeElement.innerHTML;
    const hasAllcolummns = displayedColumns.reduce( (value, column) => value && html.indexOf(column) > -1 , true);
    expect(hasAllcolummns).toBeTruthy();
  });

  it('VIEW layer: should respond to user input', () => {
    spyOn(list, 'onClick');
    listFixture.debugElement.nativeElement.querySelectorAll('tr').forEach( e => e.click());
    listFixture.whenStable().then( () => expect(list.onClick).toHaveBeenCalled());
  });

});
