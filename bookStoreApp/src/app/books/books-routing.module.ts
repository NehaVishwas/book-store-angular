import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [  
    {path:'allbooks',component:AllBooksComponent},
    {path:'recent',component:RecentBooksComponent},
    {path:'new',component:AddBooksComponent},
    {path:'newreactive',component:AddBookReactiveComponent},
    {path:'bookdetails/:id/author/:authorid',component:BookDetailsComponent},
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
