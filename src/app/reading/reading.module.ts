import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingComponent } from './reading.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ReadingComponent],
  imports: [
    RouterModule.forChild([
      { path: 'reading', component: ReadingComponent }
    ]),
    CommonModule
  ]
})
export class ReadingModule { }
