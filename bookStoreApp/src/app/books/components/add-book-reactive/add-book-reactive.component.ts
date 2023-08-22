import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {
  currencies: any[] = [
    { value: 'dollar', viewValue: '$' },
    { value: 'australian dollar', viewValue: 'AUD' },
    { value: 'indian rupee', viewValue: 'INR' },
  ];
  prices: any[] = [
    { value: '100', viewValue: '100' },
    { value: '200', viewValue: '200' },
    { value: '300', viewValue: '300' },
  ];
  public mybookForm: FormGroup;

  public titleErrorMsg: string;
  constructor(public bookService: BookService) { }
  ngOnInit(): void {
    this.initForm();
    const titleControl = this.mybookForm.get('title');
    titleControl?.valueChanges.subscribe(x =>
      this.validateTitleControl(titleControl as FormControl));
    //console.log(this.mybookForm.get('title'));
    //console.log(this.mybookForm.controls['title']);
    const formattypeControl = this.mybookForm.get('formatType');
    formattypeControl?.valueChanges.subscribe(x =>
      this.formatTypeChanged(x));
  }
  initForm(): void {
    this.mybookForm = new FormGroup({
      title: new FormControl('title', [Validators.required, Validators.minLength(8)]),
      // title: new FormControl(),
      author: new FormControl(),
      totalPages: new FormControl,
      isPublished: new FormControl,
      price: new FormGroup(
        {
          currency: new FormControl,
          value: new FormControl
        }
      ),
      datePublished: new FormControl,
      formatType:new FormControl,
      docFormat:new FormControl,
      pdfFormat:new FormControl,
    });
    //   this.mybookForm.setValue({
    //     title:'Book Title'
    //  you have to initialize everything in set value
    //   })
    this.mybookForm.patchValue({
      title: 'Book Title'
      // No needyou have to initialize everything in set value
    });
  }
  updateFormValues(): void {
    this.mybookForm.patchValue(
      {
        title: 'My Book',
        author: 'Neha Rathore',
        isPublished: true,
      });
  }
  saveBooks(): void {
    if (this.mybookForm.valid) {
      this.bookService.addBook(this.mybookForm.value);
    }
    else {
      alert("Form not valid");
    }
  }
  validateTitleControl(formControl: FormControl): void {
    this.titleErrorMsg = '';
    if (formControl.errors && (formControl.dirty || formControl.touched)) {
      if (formControl.errors?.['required']) {
        this.titleErrorMsg = 'Field is required';
      }
      else if (formControl.errors?.['minlength']) {
        this.titleErrorMsg = 'Mininmum length is '+formControl.errors['minlength'].requiredLength;
       }
    }
  }
  formatTypeChanged(formatType:string):void{
    const pdfControl=this.mybookForm.get('pdfFormat');
    const docControl=this.mybookForm.get('docFormat');
    if(formatType=='pdf')
    {
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
    }
    else if(formatType=='doc')
    {
      docControl?.addValidators([Validators.required,Validators.minLength(10)]);
      pdfControl?.clearValidators();
    }
    docControl?.updateValueAndValidity();
    pdfControl?.updateValueAndValidity();
  }
}

