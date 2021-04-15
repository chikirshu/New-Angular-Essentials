import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes = [
  { path: 'items', component: TabsComponent, children: [
    { path: '', redirectTo: 'All', pathMatch: 'full'},
    { path: ':side', component: ListComponent}
  ] },
  { path: 'add-item', loadChildren: './add-item/add-item.module#AddItemModule' },
  { path: '**', redirectTo: '/items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
