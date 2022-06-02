import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'gopesh123'
  password = 'pass1'
  errorMessage = 'You have entered invalid credentials'
  invalidLogin = false
  //Router
  //typically we would say
  //Angular.giveme.Router but we will use dependency injection.

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    //this is a hard-coded authentication logic which should not be used in production.
    if (this.username === 'gopesh123' && this.password === 'pass1') {
      this.invalidLogin = false;
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    /* console.log(this.username); */
  }
}
