import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  constructor(public snack: MatSnackBar) { }

  ngOnInit() {
  }

  public onOpenMessage(message: string, tag: string) {
    this.snack.open(message, tag, {duration: 2000});
  }

}
