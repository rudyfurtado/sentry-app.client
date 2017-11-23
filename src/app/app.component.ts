import { Component } from '@angular/core';
import { UserService, User } from './shared/shared.index';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();    
  }
  protected user: User;
  protected title: string = 'Sentry App';
}
