import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }
  getAllUsers():Observable<User[]>{
    return  this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPostsOfUserById(id: number):Observable<any>{
    return  this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
