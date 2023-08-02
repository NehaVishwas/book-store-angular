import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId:number=0;
  authorId:number=0;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((param)=>
    {
      console.log(param);
      this.bookId=param['id'];
      this.authorId=param['authorid'];
    });
       
  }

}
