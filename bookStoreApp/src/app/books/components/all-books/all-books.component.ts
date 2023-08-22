import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']  
})
export class AllBooksComponent implements OnInit{
  public books:BookModel[]=[];
  private _pageTitle:string;
  public set pageTitle(value:string)
  {
    this._pageTitle=value;
  }
  public get pageTitle()
  {
    return this._pageTitle;
  }

  constructor(public bookService:BookService, public _counterService:CounterService){}

  ngOnInit(): void {
    this.pageTitle="All Books";
    this.getAllBooks();
    // allbooks.forEach(b=>
    //   {
    //     var obj=new BookModel();
    //     obj.author=b.author;
    //     obj.id=b.id;
    //     obj.price=b.price;
    //     obj.title=b.title;
    //     obj.totalPages=b.totalPages;
    //     obj.isPublished=b.isPublished==undefined?false:b.isPublished;
    //     obj.datePublished=b.datePublished==undefined?new Date():b.datePublished;
    //     this.books.push(obj);
    //   })
    console.log(this.books);
  }
  incClick():void{
    this._counterService.incCounter();
  }
  decClick():void{
    this._counterService.decCounter();
  }
  getAllBooks():void{
    this.bookService.getBooks().subscribe(book=>{
      this.books=book;
      console.log(book);
    });
  }
}
