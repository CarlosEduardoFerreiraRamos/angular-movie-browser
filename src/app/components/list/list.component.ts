import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() displayedColumns = ['number', 'extended'];

  @Input()
  set list(list: any[]) {
    if (list) {
      this._list = list;
    }
  }

  private _list: any[];

  get list() {
    return this._list;
  }

  constructor(private _service: ListService) { }

  ngOnInit() {
  }

  public onClick(row): void {
    this.rowClick.emit(row);
  }

}
