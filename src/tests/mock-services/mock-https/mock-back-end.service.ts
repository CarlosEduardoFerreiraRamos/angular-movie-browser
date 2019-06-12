import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const movieFile = require('../../mock-assets/movie.json');

@Injectable()
export class MockBackEndService {

  getMockedRequest(request: HttpRequest<any>): Observable<HttpResponse<any>> {
    console.warn('request being re-routed by: MockHttpsInterceptService');
    const key = this.getKey(request);
    const body = this.getBody(key);
    const response = this.getResponseObject(request, body);
    return of(response);
  }

  hasMockService(request: HttpRequest<any>): boolean {
    if (request.params.has('i')) {
      return true;
    } else {
      return false;
    }
  }

  private getKey(request: HttpRequest<any>): string {
    return 'movie';
  }

  private getResponseObject({headers, urlWithParams: url}: HttpRequest<any>, body: any): HttpResponse<any> {
    return new HttpResponse({headers, status: 200, url, body});
  }

  private getBody(key: string): any {
    switch (key) {
      case 'movie':
        return movieFile;
      default:
        return null;
    }
  }
}
