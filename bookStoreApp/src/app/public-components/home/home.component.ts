import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorsModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent implements OnInit,AfterViewInit,AfterViewChecked,OnDestroy{
    @ViewChild('btnCounter') btnCounter:ElementRef;
    @ViewChild(AuthorsComponent) authComponent:AuthorsComponent;
    public count:number=0;
    public test:boolean=false;
    public obj : AuthorsModel={id:10,name:'Neha'};
    public address:string='India';
    public time:any; 
  ngOnInit(): void {   
    console.log("Hello from ng on Init from home") ;
    console.log(this.btnCounter);
    this.timer();
  }
  constructor(public testService:TestService)
  {
    console.log("Hello from constructor from home");
  }
  ngOnDestroy(): void {
    console.log("Home Component destroyed");
    clearInterval(this.time);
  }
  ngAfterViewChecked(): void {
    console.log("After View Checked from parent counter is "+this.authComponent.counter);
  }
  ngAfterViewInit(): void {
    console.log("after view init in parent "+this.btnCounter);
    this.btnCounter.nativeElement.innerHTML="My Button";
  }
  private timer():void
  {
    this.time=setInterval(()=>{this.count++;
    console.log(this.count);},1000);
  }
  counter():void{
    this.count++;
    this.test=!this.test;
    this.obj.id=this.count;
    this.address=this.address+' '+this.count;
    // this.obj={id:this.count,name:'vishwas'};
  }
  // @ViewChild(AuthorsComponent) private childAuthor:AuthorsComponent;
  // @ViewChild('authors') private childAuthor:AuthorsComponent;
  // @ViewChild('incbutton') private incButton:MatButton;
  // @ViewChild('titled') private titled:ElementRef;
 /* tile:any;
 constructor(public _counterService:CounterService, @Inject('appTitle') public title:any){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void{}
  public childData($event:any):void{
    console.log($event);

  } */
  /* ngAfterViewInit(): void { 
    setTimeout(() => {
      // this.childAuthor.setdata(10);
      // //this.incButton.disabled=true;
      // this.incButton.color='primary';
      // this.titled.nativeElement.innerHTML="This is";
    }, 0);
    
  }
  incClick():void{
    this._counterService.incCounter();
  }
  decClick():void{
    this._counterService.decCounter();
  } */
}
