import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

const routes: Routes = [
    {path:'addbook',component:AddBookComponent},
    {path:'deletebook',component:DeleteBookComponent}
  /* {path:'user/:userid', component:UserComponent, children:[
    {path:'addbook',component:AddBookComponent},
    {path:'deletebook',component:DeleteBookComponent}
  ]} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
