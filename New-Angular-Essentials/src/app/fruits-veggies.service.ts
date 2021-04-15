import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LogService} from './log.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FruitsVeggiesService {
  private items = [
    {name: 'LadyFinger', side: ''},
    {name: 'Mango', side: ''}
  ];

  private logService: LogService;
  itemschanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }
  getItems(chosenList) {
    if (chosenList === 'All') {
      return this.items.slice(); // To return copy of that array
    }
    return this.items.filter((item) => {
      return item.side === chosenList;
    });
  }
  onSideChosen(itemInfo) {
    const pos = this.items.findIndex((item) => {
      return item.name === itemInfo.name;
    });
    this.items[pos].side = itemInfo.side;
    this.itemschanged.next(); // emitting event
    this.logService.writeLog('Changed side of ' + itemInfo.name + '; new side is ' + itemInfo.side);
  }
  addItem(name, side) {
    const pos = this.items.findIndex((item) => {
      return item.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newItem = {name: name, side: side};
    this.items.push(newItem);
  }
  fetchItems() {
    this.http.get('https://swapi.dev/api/people/').subscribe(
      (data) => {
        console.log(data);
        const items = data['results'].map(item => {
          return {name: item.name, side: ''};
        });
        this.items = items;
        this.itemschanged.next();
      }
    );
  }
  // implement later
  postItems() {
  }
}
