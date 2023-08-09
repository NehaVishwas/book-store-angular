import { Injectable } from '@angular/core';

@Injectable(
  /* {
  // providedIn: 'root'
  providedIn: 'any'
  } */
)
export class CounterService {
 public count:number=0;
  constructor() { }
  public incCounter():void{
    this.count++;
  }
  public decCounter():void{
    this.count--;
  }
}
