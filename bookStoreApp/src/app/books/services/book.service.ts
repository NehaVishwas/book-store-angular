import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
/* public allB-ooks= [
  {
    "id":1,
    "title":"Angular",
    "totalPages":546,
    "author":"Neha",
    "price":
    {
      "currency":"INR",
      "value":96
    }
  },
  {
    "id":2,
    "title":"Basics",
    "totalPages":547,
    "author":"Vish",
    "price":
    {
      "currency":"AUD",
      "value":55
    }
  },
  {
    "id":3,
    "title":"Cobol",
    "totalPages":549,
    "author":"Vishwas",
    "price":
    {
      "currency":"USD",
      "value":76
    }
  },
  {
    "id":4,
    "title":"Angular JS",
    "totalPages":765,
    "author":"Vishu",
    "price":
    {
      "currency":"Dollar",
      "value":67
    }
  },
  {
    "id":1,
    "title":"Angular Bootcamp",
    "totalPages":556,
    "author":"Neha",
    "price":
    {
      "currency":"USD",
      "value":90
    }
  }
]; */
  constructor(public _httpClient:HttpClient) { }

  public addBook(bookModel:BookModel):Observable<BookModel[]>
  {
    console.log("log from service"+bookModel);
    return this._httpClient.post<BookModel[]>("https://localhost:7107/api/book",bookModel);
    //this.allBooks.push(bookModel);
  }
  public getBooks():Observable<BookModel[]>
  {
    return this._httpClient.get<BookModel[]>("https://localhost:7107/api/book");
    //return this.allBooks;
  }
}
