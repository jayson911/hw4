import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './services/user.service';
import {User} from './models/User';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson3';
  outgoingUsers: User[];
  outgoingPosts: Post[];

  constructor() {
  }
}
