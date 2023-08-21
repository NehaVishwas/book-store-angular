import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBooksComponent } from './components/add-books/add-books.component';

const routes: Routes = [  
    {path:'allbooks',component:AllBooksComponent},
    {path:'recent',component:RecentBooksComponent},
    {path:'new',component:AddBooksComponent},
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
