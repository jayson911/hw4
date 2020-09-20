import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private httpClient: HttpClient) {
  }
  getAllPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
  getCommentsOfPostId(id: number):Observable<any>{
    return this.httpClient.get<any[]>(`http://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }

}
