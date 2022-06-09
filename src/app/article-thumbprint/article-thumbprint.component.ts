import { Component, Input, OnInit } from '@angular/core';
import { ArticleHeader } from '../models/article-header.model';
import { DataFormatterService } from '../services/data-formatter.service';

@Component({
  selector: 'app-article-thumbprint',
  templateUrl: './article-thumbprint.component.html',
  styleUrls: ['./article-thumbprint.component.scss']
})
export class ArticleThumbprintComponent implements OnInit {
  @Input() articleHeader: ArticleHeader;

  constructor(private dataFormatterService: DataFormatterService) {
    this.articleHeader = new ArticleHeader;
  }

  ngOnInit(): void {
  }

  getBackgroundColor(): string{
    switch(this.articleHeader.genre)
    {
      case "Fantasy":
        return "#8b2494";
      case "Scifi":
        return "#3140c4";
      default:
        return "000000";
    }
  }

  getTimeModified(): string{
    if(this.articleHeader == null || this.articleHeader.timeModified == null)
    {
      return "";  
    }
    else{  
      return this.dataFormatterService.formatDatetime(this.articleHeader.timeModified);
    }
  }
}
