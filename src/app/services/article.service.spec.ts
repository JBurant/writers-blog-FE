import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../models/article.model';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [ArticleService]});
    service = TestBed.inject(ArticleService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 200 on success', done => {
    service.get("37ad45f8-1fa8-4c41-88fc-acb9df60f72a").subscribe(
      value => {
        console.log("response", value);
        expect<any>(value).toBeInstanceOf(Article);
        done();
      },
        err => console.log("Error",err.message)
      );
    done();
  });
});
