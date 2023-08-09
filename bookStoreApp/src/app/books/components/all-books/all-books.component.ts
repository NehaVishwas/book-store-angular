import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']  
})
export class AllBooksComponent implements OnInit{
  public books:BookModel[]=[];

  constructor(public bookService:BookService, public _counterService:CounterService){}

  ngOnInit(): void {
    this.books=this.bookService.getBooks();
    console.log(this.books);
  }
  incClick():void{
    this._counterService.incCounter();
  }
  decClick():void{
    this._counterService.decCounter();
  }
}
