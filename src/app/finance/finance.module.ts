import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinanceComponent],
  imports: [
    RouterModule.forChild([
      { path:'finance', component: FinanceComponent }
    ]),
    CommonModule
  ]
})
export class FinanceModule { }
