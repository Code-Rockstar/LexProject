import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login =new Login();
  userArray=[
    {username:'admin',password:'admin'},
    {username:'user2',password:'user2'}
  ]
  loginSuccessful:Boolean
  formSubmit:boolean=false 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.formSubmit=true
      console.log(this.login.username)
      console.log(this.login.password)
      for (let index = 0; index < this.userArray.length; index++) {
        if(this.userArray[index].username===this.login.username && this.userArray[index].password===this.login.password){
            this.loginSuccessful=true
            break;
        }
        this.loginSuccessful=false
      } 
      if(this.loginSuccessful){
        this.router.navigate(['/bookRides'])
      }
  }
}
