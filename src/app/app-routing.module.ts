import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRideComponentComponent } from './book-ride-component/book-ride-component.component';
import { LoginComponent } from './login/login.component'; 


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'bookRides',component:BookRideComponentComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
