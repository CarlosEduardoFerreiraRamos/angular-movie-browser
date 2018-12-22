import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss']
})
export class ModalOverlayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalOverlayComponent>) { }

  ngOnInit() {
  }

}
