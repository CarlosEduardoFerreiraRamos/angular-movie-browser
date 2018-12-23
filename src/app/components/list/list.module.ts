import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material';
import { ListService } from './list.service';

@NgModule({
  declarations: [ListComponent],
  imports: [
    MatTableModule,
    CommonModule,
  ],
  exports: [ListComponent],
  providers: [ListService]
})
export class ListModule { }
