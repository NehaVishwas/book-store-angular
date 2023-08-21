import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { PriceModel } from '../../models/price.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit, AfterViewChecked {
  public model:BookModel;
  @ViewChild('myForm') myForm:NgForm;
  selectedValue: string;
  currencies= [
    {value: 'dollar', viewValue: '$'},
    {value: 'australian dollar', viewValue: 'AUD'},
    {value: 'indian rupee', viewValue: 'INR'},
  ];
  constructor(private bookService:BookService)
  {

  }
  ngOnInit(): void {
    this.model=new BookModel();
    //this.model.title='Title';
    this.model.author='Neha';
    this.model.isPublished=false;
    this.model.datePublished=new Date();
    this.model.totalPages=1;
    this.model.price={
      currency:this.currencies[0].value,
      value:1,
    }
  }
  
  ngAfterViewChecked(): void
  {
  console.log(this.myForm);
  }
  saveBooks():void{
    // const book:BookModel=new BookModel();
    // book.title=value.title;
    // book.author=value.author;
    // book.price= {
    //   currency:this.selectedValue,
    //   value:value.price,
    // } 
    // book.totalPages=value.pages;
    // book.isPublished=value.isPublished;
    // book.datePublished=value.publishedon;
    if (this.myForm.valid)
    {
          this.bookService.addBook(this.model);   
          this.myForm.resetForm();
    } 
    else{
      alert("Form not valid");
    }
  }
}
