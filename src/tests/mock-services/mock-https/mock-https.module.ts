import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpsInterceptService } from './mock-https-intercept.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{provide:  HTTP_INTERCEPTORS, useClass: MockHttpsInterceptService, multi: true}]
})
export class MockHttpsModule { }
