import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FruitsVeggiesService } from './fruits-veggies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  fvService: FruitsVeggiesService;

  constructor(fvService: FruitsVeggiesService) {
    this.fvService = fvService;
  }

  ngOnInit() {
    // uncomment below to fetch api results
    // this.fvService.fetchItems();
  }
}
