import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';

@NgModule({
  declarations: [
    AddItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddItemComponent}
    ])
  ]
})
export class AddItemModule {}
