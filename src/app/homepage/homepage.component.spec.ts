import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../services/search.service';
import { HomepageComponent } from './homepage.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports: [HttpClientModule],
      providers: [SearchService]}).compileComponents();
    });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
