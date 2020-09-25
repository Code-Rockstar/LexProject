import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  pageTitle = 'mCart';
    loginTitle = 'Login';
    userName: string;
    constructor() { }


    // Invoked when user clicks on login button
    // Navigates to login page
    login() {
        // const value = document.getElementById('login').innerHTML;
        // if (value === 'Login') {
        //     this._router.navigate(['/login']);
        // } else if (value === 'Logout') {
        //     sessionStorage.clear();
        //     document.getElementById('login').innerHTML = 'Login';
        //     document.getElementById('welcome').style.display = 'none';
        //     this._router.navigate(['/welcome']);
        // }
    }
}
