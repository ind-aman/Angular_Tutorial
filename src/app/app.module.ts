import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleEventComponent } from './lifecycle-event/lifecycle-event.component';
import { FirstChildComponent } from './lifecycle-event/first-child/first-child.component';
import { SecondChildComponent } from './lifecycle-event/second-child/second-child.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleEventComponent,
    FirstChildComponent,
    SecondChildComponent,
    PromiseComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
