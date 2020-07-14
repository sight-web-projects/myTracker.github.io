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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LearningModule,
    FaithModule,
    ProjectsModule,
    FinanceModule,
    ReadingModule,
    FamilyModule,
    FriendsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
