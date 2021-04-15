import { Component, OnInit } from '@angular/core';
import { FruitsVeggiesService } from '../fruits-veggies.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  availableSides = [
    {display: 'None', value: '' },
    {display: 'Fruit', value: 'Fruit' },
    {display: 'Vegetable', value: 'Vegetable' }
  ];

  private fvService: FruitsVeggiesService;

  constructor(fvService: FruitsVeggiesService) {
    this.fvService = fvService;
  }

  ngOnInit() {
  }
  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.fvService.addItem(submittedForm.value.name, submittedForm.value.side);
  }

}
