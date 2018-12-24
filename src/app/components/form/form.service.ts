import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _data$: Observable<any>;

  public get data$(): Observable<any> {
    return this._data$;
  }

  constructor() { }

  public setData(data: any): void {
    if (data) {
      this._data$ = of(data);
    }
  }

  public resetData(): void {
    this._data$ = of({});
  }
}
