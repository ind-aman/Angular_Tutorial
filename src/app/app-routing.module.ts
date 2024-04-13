import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ParentChildCommunicationComponent } from './parent-child-communication/parent-child-communication.component';
import { HttpTutorialComponent } from './http-tutorial/http-tutorial.component';

const routes: Routes = [
  { path: 'Promise' , component : PromiseComponent},
  {path:'Communication', component:ParentChildCommunicationComponent},
  {path:'Http', component:HttpTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
