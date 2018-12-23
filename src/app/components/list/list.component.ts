import { Component, OnInit, Input } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() displayedColumns = ['number', 'extended'];

  @Input()
  set list(list: [any]) {
    console.log(list)
    if (list) {
      this._list = list;
    }
  }

  private _list: [any];

  get list() {
    return this._list;
  }

  constructor(private _service: ListService) { }

  ngOnInit() {
  }

}
