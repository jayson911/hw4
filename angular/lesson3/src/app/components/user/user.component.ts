import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {log} from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private userService: UserService) {
  }

  xxx(user: User): void{
    console.log('click', user);

    this.userService.getPostsOfUserById(user.id)
      .subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
