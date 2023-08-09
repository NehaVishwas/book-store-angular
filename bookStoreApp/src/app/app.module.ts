import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './public-components/home/home.component';
import { BooksModule } from './books/books.module';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';
import { factory } from './shared/services/counter.factory';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,    
    BooksModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [factory,
     TestService,
    // {provide:CounterService,useClass:Counter2Service},TestService,
   {provide:'appTitle',useValue:{title:"BookStore App",description:"Book Store Description"}
}],
  // providers: [{provide:CounterService,useExisting:Counter2Service},Counter2Service], see user existing video
  bootstrap: [AppComponent]
})
export class AppModule { }
