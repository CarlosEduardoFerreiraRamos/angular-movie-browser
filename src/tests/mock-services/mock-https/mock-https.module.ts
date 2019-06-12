import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpsInterceptService } from './mock-https-intercept.service';
import { MockBackEndService } from './mock-back-end.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide:  HTTP_INTERCEPTORS, useClass: MockHttpsInterceptService, multi: true},
    MockBackEndService
  ]
})
export class MockHttpsModule { }
