import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { lastValueFrom } from 'rxjs';
import { EnvironmentService } from '../environments/enviroment.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl: string;
  constructor(
    private http: HttpClient,
    private enviroment: EnvironmentService
  ) {
    this.apiUrl = enviroment.environment.apiUrl;
  }

  async getPostsList(): Promise<Post[]> {
    console.log(this.apiUrl);
    
    const method = `postings`;

    const response = this.http.get<Post[]>(`${this.apiUrl}/${method}`);

    return lastValueFrom(response);
  }

  async getPostDetails(postId: string): Promise<Post> {
    const method = `postings/${postId}`;

    const response = this.http.get<Post>(`${this.apiUrl}/${method}`);

    return lastValueFrom(response);
  }
}
