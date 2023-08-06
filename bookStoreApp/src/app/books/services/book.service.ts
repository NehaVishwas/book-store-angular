import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks():BookModel[]
  {
    return [
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
    ]
  }
}
