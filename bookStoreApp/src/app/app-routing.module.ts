import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './public-components/home/home.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full', title:'Welcome'},
  {path:'about',component:AboutUsComponent},
  {
    path:'auth',
    component:AuthComponent,
    loadChildren:()=> import('./auth/auth.module').then((x)=>x.AuthModule)
  },
  {
    path:'user/:userid',
    component:UserComponent,
    loadChildren:()=> import('./user/user.module').then((x)=>x.UserModule)
  },
  {
    path:'books',
    component:BooksComponent,
    loadChildren:()=> import('./books/books.module').then((x)=>x.BooksModule)
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
