import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LifecycleEventComponent } from './lifecycle-event/lifecycle-event.component';
import { FirstChildComponent } from './lifecycle-event/first-child/first-child.component';
import { SecondChildComponent } from './lifecycle-event/second-child/second-child.component';
import { PromiseComponent } from './promise/promise.component';
import { HttpTutorialComponent } from './http-tutorial/http-tutorial.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleEventComponent,
    FirstChildComponent,
    SecondChildComponent,
    PromiseComponent,
    HttpTutorialComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
