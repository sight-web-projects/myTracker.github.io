import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaithComponent } from './faith.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FaithComponent],
  imports: [
    RouterModule.forChild([
      { path: 'faith', component: FaithComponent}

    ]),
    CommonModule

  ]
})
export class FaithModule { }
