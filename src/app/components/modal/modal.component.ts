import {
  Component,
   OnInit,
   ViewChild,
   TemplateRef,
   ContentChildren,
   ElementRef,
   QueryList,
   AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterContentInit {

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @ContentChildren(ElementRef) children: QueryList<ElementRef> = new QueryList<ElementRef>();

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    
  }

  onOpen() {
    console.log('content: ' , this.content);
    console.log('children: ' , this.children);
    const dialogRef = this._dialog.open(ModalOverlayComponent, {
      width: '400px',
      height: '400px'
    });
  }

}
