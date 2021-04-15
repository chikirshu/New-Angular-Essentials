import { Component, OnInit } from '@angular/core';
// import { FruitsVeggiesService } from '../fruits-veggies.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // unused code - but important for reference
  /*items = [];
  chosenList = 'All';
  private fvService: FruitsVeggiesService;
  constructor(fvService: FruitsVeggiesService) {
    this.fvService = fvService;
   }

  onChoose(side) {
    this.chosenList = side;
  }
  getItems() {
    // const fvService = new FruitsVeggiesService();
    this.items = this.fvService.getItems(this.chosenList);
    return this.items;
  }*/
  constructor() {}
  ngOnInit() {}
}
