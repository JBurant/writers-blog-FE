import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleHeader } from '../models/article-header.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search (queryString: string): Observable<[ArticleHeader]>
  {
    let url = environment.apiUrl + "/articles/search";

    if(!queryString || queryString.length === 0 )
    {
      url = url + queryString;
    }

    return this.http.post<[ArticleHeader]>(url,null);
  }
}
