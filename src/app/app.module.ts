import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningModule } from './learning/learning.module';
import { FaithModule } from './faith/faith.module';
import { ProjectsModule } from './projects/projects.module';
import { FinanceModule } from './finance/finance.module';
import { ReadingModule } from './reading/reading.module';
import { FamilyModule } from './family/family.module';
import { FriendsModule } from './friends/friends.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LearningModule,
    FaithModule,
    ProjectsModule,
    FinanceModule,
    ReadingModule,
    FamilyModule,
    FriendsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
