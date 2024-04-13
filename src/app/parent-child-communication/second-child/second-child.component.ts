import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  @Output() newItem = new EventEmitter<string>;
  

  testVar:string | undefined;

  inputSubmit(myform:NgForm){
    this.testVar = myform.value.test1;
    this.newItem.emit(this.testVar);

  }

}
