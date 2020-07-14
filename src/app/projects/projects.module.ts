import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    RouterModule.forChild([
     { path:'projects', component: ProjectsComponent }
    ]),
    CommonModule
  ]
})
export class ProjectsModule { }
