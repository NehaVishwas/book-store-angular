import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'public', component:PublicComponent,
   children:[
    {path:'allbooks',component:AllBooksComponent},
    {path:'bookdetails/:id/author/:authorid',component:BookDetailsComponent},
    {path:'bookdetails/:id',component:BookDetailsComponent},
    {path:'home', component:HomeComponent}
  ]
  }
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
export class PublicRoutingModule { }
