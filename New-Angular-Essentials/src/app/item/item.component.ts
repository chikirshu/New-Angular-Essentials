import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FruitsVeggiesService } from '../fruits-veggies.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  private fvService: FruitsVeggiesService;

  constructor(fvService: FruitsVeggiesService) {
    this.fvService = fvService;
   }

  ngOnInit() {
  }
  onAssign(side) {
    // Below is not a good practice. We generally make all changes related things in a single file.
    // That's why using EventEmitter here.
    // this.character.side = side;

    // Use Angular dependency Injection instead
    // this.sideAssigned.emit({name: this.item.name, side: side});

    this.fvService.onSideChosen({ name: this.item.name, side: side});


  }

}
