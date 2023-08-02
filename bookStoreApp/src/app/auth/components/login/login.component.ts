import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username:string='';
  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>
    {
      this.username=params['name'];
    });
  }
  
  goToSignUp():void{
    this.router.navigate(['auth/signup']);
  }
  goToBookDetails(bookid:number,authorid:number):void{
    this.router.navigate(['public/bookdetails',bookid,'author',authorid],{queryParams:{name:'Nehu'}});
  }
}
