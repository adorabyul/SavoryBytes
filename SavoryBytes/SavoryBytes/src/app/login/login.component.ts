import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { AppComponent } from '../app.component';
import { UserService } from '../auth/user.service';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  configUrl = "http://127.0.0.1:8000/api/";

  loginForm: FormGroup | any;
  user!: User;

  ngOnInit(){
    this.loginForm = this.fb.group({
      id: 0,
      name: '',
      email: '',
      password: '',
      password_confirmation: ''

    }
    )
    this.user = {
      id: 0,
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService, private appComponent: AppComponent, private router: Router) {
   
  }

  
  onSubmit() {
    
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;


    this.userService.loginUser(this.user);
    this.appComponent.userLoggedIn = true;
    
    this.router.navigate(['/'])
  }

}
