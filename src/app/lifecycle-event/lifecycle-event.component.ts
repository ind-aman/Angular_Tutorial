import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  templateUrl: './lifecycle-event.component.html',
  styleUrls: ['./lifecycle-event.component.css']
})
export class LifecycleEventComponent {
  firstVar:any = "jackTack";


  stringFromchild(secondChild:string){
      this.firstVar = secondChild;
  }
  changeInput(event:any){
    this.firstVar = event.target.value;
  }
}
