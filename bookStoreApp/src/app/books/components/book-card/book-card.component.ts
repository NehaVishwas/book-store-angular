import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input('allbooks')  
  set books(value:BookModel[])
  {
    value.map(x=>x.title='Title: '+x.title);
    this._books=value;
  }
  get books()
  {
    return this._books;
  }
  _books:BookModel[];
ngOnInit(): void {
  
}


}
