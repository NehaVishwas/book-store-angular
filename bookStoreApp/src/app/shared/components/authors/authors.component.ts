import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input,OnChanges,OnInit,Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorsModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges,DoCheck,AfterContentChecked,AfterContentInit{
  // @Output() myData=new EventEmitter<string>();
// constructor(private testService:TestService)
@Input() data:number;
@Input() data2:boolean;
@Input() authors:AuthorsModel;
@ContentChild(AuthorsAddressComponent) authAddress:AuthorsAddressComponent;
public counter:number=0;
constructor()
{
  console.log("Hello from constructor") ;
}
  ngAfterContentChecked(): void {
    console.log("after content checked "+this.authAddress?.address);
  }
  ngAfterContentInit(): void {
    console.log("after content init "+this.authAddress?.address);
  }
ngDoCheck(): void {
  console.log("From do check");
  console.log(this.authors);
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("Hello from ng on changes") ;
  console.log(changes);
}
ngOnInit(): void {
  console.log("Hello from ng on Init") ;
  }
public incCounter():void{
  this.counter++;
}

  /* datum:number;
  setdata(value:number):void
  {
    this.datum=value;
    console.log(this.datum);
  } */ 

  /* public btnClick():void{
    this.testService.myData='Vishwas';
  } */
/* @Input()
get data()
{
  return this._data;
}
set data(value:number)
{
  value++;
  this._data=value;
}
private _data:number;
@Input()
showauthors:boolean;
 */
}
