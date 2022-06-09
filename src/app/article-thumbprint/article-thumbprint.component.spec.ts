import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbprintComponent } from './article-thumbprint.component';

describe('ArticleThumbprintComponent', () => {
  let component: ArticleThumbprintComponent;
  let fixture: ComponentFixture<ArticleThumbprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleThumbprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleThumbprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
