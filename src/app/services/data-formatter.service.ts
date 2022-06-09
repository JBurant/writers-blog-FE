import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormatterService {

  constructor() { }

  formatDatetime(dateTime: string) : string
  {
    const year = dateTime.substring(0,4);
    const month = dateTime.substring(5,7);
    const day = dateTime.substring(8,10);
    
    return `${day}.${month}.${year}`;
  }

  formatTags(tags: string[]): string
  {
    return tags.join(", ");
  }
}
