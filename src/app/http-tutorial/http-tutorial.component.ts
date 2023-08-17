import { Component, OnInit } from '@angular/core';
import { HttpTutorialService } from './httpService/http-tutorial.service';

@Component({
  selector: 'app-http-tutorial',
  templateUrl: './http-tutorial.component.html',
  styleUrls: ['./http-tutorial.component.css']
})
export class HttpTutorialComponent implements OnInit{
  tempStr:string ="";

  ngOnInit(): void {
    
  }

  getProduct(){
    return this._dummyapi.getList().subscribe
  }

  constructor(private _dummyapi:HttpTutorialService){}
}
