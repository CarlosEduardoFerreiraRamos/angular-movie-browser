import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MockBackEndService } from './mock-back-end.service';
import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class MockHttpsInterceptService implements HttpInterceptor {

  constructor(private _backEnd: MockBackEndService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(req).pipe(
      switchMap(
        requesition => this._backEnd.hasMockService(requesition) ?
          this._backEnd.getMockedRequest(req) :
          next.handle(requesition)
      )
    );
  }
}
