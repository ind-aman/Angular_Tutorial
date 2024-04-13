import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html',
  styleUrls: ['./parent-child-communication.component.css']
})
export class ParentChildCommunicationComponent {
  firstVar:any = "jackTack";
  

  stringFromchild(secondChild:string){
      this.firstVar = secondChild;
  }
  changeInput(event:any){
    this.firstVar = event.target.value;
  }
}
