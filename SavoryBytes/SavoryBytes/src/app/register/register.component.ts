import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../auth/user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  configUrl = "http://127.0.0.1:8000/api/";

  registerForm: FormGroup | any;
  newUser!: User;

  ngOnInit(){
    this.registerForm = this.fb.group({
      id: 0,
      name: '',
      email: '',
      password: '',
      password_confirmation: ''

    }
    )
    this.newUser = {
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

    this.newUser.name = this.registerForm.get('name').value;
    this.newUser.email = this.registerForm.get('email').value;
    this.newUser.password = this.registerForm.get('password').value;
    this.newUser.password_confirmation = this.registerForm.get('password_confirmation').value;

    this.userService.registerUser(this.newUser);
    this.appComponent.userLoggedIn = true;
    this.router.navigate(['/'])
  }
 
}
