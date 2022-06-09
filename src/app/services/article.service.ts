import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  get (id: string): Observable<Article|null>
  {
    return this.http.get<Article|null>(environment.apiUrl + "/articles?id=" + id, { observe: 'response' }).pipe(
      map(response => response.body)
      );
  }
}
