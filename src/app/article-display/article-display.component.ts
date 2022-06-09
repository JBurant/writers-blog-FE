import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { DataFormatterService } from '../services/data-formatter.service';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})

export class ArticleDisplayComponent implements OnInit {
  @Input() articleId: string;

  article: Article;

  constructor(private articleService: ArticleService, private dataFormatterService: DataFormatterService, public router: Router, private route:ActivatedRoute) { 
    this.articleId = "";
    this.article = new Article;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> this.articleId = params['id']);
    let temp: Article|null;
    temp = new Article;
    this.articleService.get(this.articleId).subscribe((value:any) => {if(value) this.article = value; });
  }

  getTimeModified(): string{
    if(this.article == null || this.article.timeModified == null)
    {
      return "";  
    }
    else{  
      return this.dataFormatterService.formatDatetime(this.article.timeModified);
    }
  }

  getTags(): string{
    if(this.article == null || this.article.tags == null)
    {
      return "";  
    }
    else{ 
      return this.dataFormatterService.formatTags(this.article.tags);   
    } 
  }
}
