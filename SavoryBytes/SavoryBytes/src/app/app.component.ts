import { Component} from '@angular/core';
import { UserService } from './auth/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  token!: string | null;
  userLoggedIn: boolean = false;


  constructor(private userService: UserService) {}


  logout() {
    this.token = localStorage.getItem("token");
    this.userService.logoutUser(this.token);
    this.userLoggedIn = false;
  }

}
