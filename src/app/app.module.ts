import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { ListModule } from './components/list/list.module';
import { FormModule } from './components/form/form.module';
import { ModalModule } from './components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { PopupMessageModule } from './components/popup-message/popup-message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
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
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
