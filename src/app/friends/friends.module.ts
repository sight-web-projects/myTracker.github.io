import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FriendsComponent],
  imports: [
    RouterModule.forChild([
      { path: 'friends', component: FriendsComponent }
    ]),
    CommonModule
  ]
})
export class FriendsModule { }
