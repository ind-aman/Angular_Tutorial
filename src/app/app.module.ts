import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentChildCommunicationComponent } from './parent-child-communication/parent-child-communication.component';
import { FirstChildComponent } from './parent-child-communication/first-child/first-child.component';
import { SecondChildComponent } from './parent-child-communication/second-child/second-child.component';
import { PromiseComponent } from './promise/promise.component';
import { HttpTutorialComponent } from './http-tutorial/http-tutorial.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomStoryComponent } from './localizationTutorial/random-story/random-story.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildCommunicationComponent,
    FirstChildComponent,
    SecondChildComponent,
    PromiseComponent,
    HttpTutorialComponent,
    RandomStoryComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
