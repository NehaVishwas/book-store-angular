import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [  
    {path:'allbooks',component:AllBooksComponent},
   /*  */ {path:'bookdetails/:id/author/:authorid',component:BookDetailsComponent},
    {path:':id',component:BookDetailsComponent},    
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BooksRoutingModule { }
