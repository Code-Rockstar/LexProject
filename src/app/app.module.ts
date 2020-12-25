import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponentComponent } from './book-ride-component/book-ride-component.component';
import { MouseHoverDirectiveDirective } from './mouse-hover-directive.directive';
import { FormsModule } from '@angular/forms';
import { ToOfficePipe } from './to-office.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponentComponent,
    MouseHoverDirectiveDirective,
    ToOfficePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
