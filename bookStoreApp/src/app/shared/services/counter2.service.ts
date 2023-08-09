import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { TestService } from './test.service';

@Injectable(
  /* {
  providedIn: 'root'
} */
)
export class Counter2Service extends CounterService {

  public override count:number=0;
  /* constructor(private _testService:TestService) { 
    super();
  } */
  public override incCounter():void{
    this.count+=2;
  }
  public override decCounter():void{
    this.count-=2;
  }
}
