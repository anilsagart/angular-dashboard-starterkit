import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { loginCreds } from './loginCreds';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginStatus: boolean = false;
  loginError : boolean = false;
  errorMessage: string = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {
    this.loginService.isLoggedIn.next(false)
  }
  ngOnInit(): void { }

  loginForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z -]*$')],
    ],
    password: ['', [Validators.required]]
  });

  login() {
    const validateAdd = this.loginForm.status;
    const formData = this.loginForm.value;
    if (validateAdd == 'VALID') {
      var usernameExist = loginCreds.find(temp => temp.username == formData.username);
      if (usernameExist) {
        var passwordExist = loginCreds.find(temp => temp.password == formData.password);
        if (passwordExist) {
          this.loginService.loggedUser.next({ username: formData.username })
          localStorage.setItem('username', String(formData.username));
          localStorage.setItem('loginStatus', String(true));
          this.loginService.isLoggedIn.next(true);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.loginError = true;
          this.errorMessage = 'Invalid Username or Password';
        }
      }
      else {
        this.loginError = true;
        this.errorMessage = 'Username does not exist';
      }
    }
  }

  toggle(){
    this.loginError = !this.loginError;
  }
}
