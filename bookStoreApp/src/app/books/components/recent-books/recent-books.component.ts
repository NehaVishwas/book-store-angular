import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent {
  public recentBooks:BookModel[];
constructor(public _bookService:BookService)
{
  this.getRecentBooks();
}
public getRecentBooks():void{
  //this.recentBooks=this._bookService.recentBooks();
}
}
