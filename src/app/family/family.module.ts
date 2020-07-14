import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FamilyComponent],
  imports: [
    RouterModule.forChild([
      { path: 'family', component: FamilyComponent }
    ]),
    CommonModule
  ]
})
export class FamilyModule { }
