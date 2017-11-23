import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { User } from '../shared/shared.index';
import { UserService } from '../shared/shared.index';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  constructor() { 
  }
  @Input() 
  user: User;

  ngOnInit() {
  }

}
