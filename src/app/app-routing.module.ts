import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { LifecycleEventComponent } from './lifecycle-event/lifecycle-event.component';

const routes: Routes = [
  { path: 'Promise' , component : PromiseComponent},
  {path:'Communication', component:LifecycleEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
