import { Component, OnInit } from '@angular/core';
import { ArticleHeader } from '../models/article-header.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articles: [ArticleHeader];

  constructor(private searchService: SearchService) {
    this.articles = [new ArticleHeader];
  }

  ngOnInit(): void {
    this.callSearch();
  }
  
  callSearch() {
    this.searchService.search("").subscribe(value => this.articles = value);
  }
}
