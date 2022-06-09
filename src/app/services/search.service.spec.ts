import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [SearchService]});
    service = TestBed.inject(SearchService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 200 on success', (done: DoneFn) => {
    const EXPECTED_NUMBER_OF_ITEMS: number = 2;
    service.search("").subscribe(value => {
      console.log("response", value);
      expect<any>(value.length).toBe(EXPECTED_NUMBER_OF_ITEMS,"length");
      done();
    },
      err => console.log("Error",err.message)
    );
});
});
