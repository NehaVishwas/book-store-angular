import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: "root"
}
)
export class TestService {
  public status:boolean=true;
  public myData:string;
  constructor() { }
}
