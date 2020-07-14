import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './learning.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'learning', component: LearningComponent }
    ])
  ]
})
export class LearningModule { }
