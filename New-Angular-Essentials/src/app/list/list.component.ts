import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FruitsVeggiesService } from '../fruits-veggies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input() items;
  items = [];
  activatedRoute: ActivatedRoute;
  private fvService: FruitsVeggiesService;
  loadedSide = 'All';
  subscription;

  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(activatedRoute: ActivatedRoute, fvService: FruitsVeggiesService) {
    this.activatedRoute = activatedRoute;
    this.fvService = fvService;
  }

  ngOnInit() {
    // this.fvService.fetchItems();
    // This code runs asynchronously -- starts
    // here we are registering the subscriber, whenever params changes
    // this will be executed
    this.activatedRoute.params.subscribe(
      (params) => {
        this.items = this. fvService.getItems(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.fvService.itemschanged.subscribe(
      () => {
        this.items = this.fvService.getItems(this.loadedSide);
      }
    );
    // This code runs asynchronously -- ends
  }

  // onSideAssigned(itemInfo) {
  //   this.sideAssigned.emit(itemInfo);
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
