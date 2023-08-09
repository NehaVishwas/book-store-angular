import { Component, Inject, inject } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 tile:any;
 constructor(public _counterService:CounterService, @Inject('appTitle') public title:any){}
  incClick():void{
    this._counterService.incCounter();
  }
  decClick():void{
    this._counterService.decCounter();
  }
}
