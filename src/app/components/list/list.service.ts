import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _list: Observable<[any]> = from([]);

  constructor() { }

  public add(list: [any]): void {
    this._list = from(list);
  }

  public set list(list: Observable<[any]>) {
    this._list = this.list;
  }

  public get list(): Observable<[any]> {
    return this._list;
  }
}
