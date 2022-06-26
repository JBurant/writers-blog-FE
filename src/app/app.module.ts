import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { SearchService } from './services/search.service';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleThumbprintComponent } from './article-thumbprint/article-thumbprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleDisplayComponent,
    ArticleThumbprintComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
