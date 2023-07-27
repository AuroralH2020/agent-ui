import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { MyNodeItemsComponent } from './my-node-items/my-node-items.component';
import { MyOrgItemsComponent } from './my-org-items/my-org-items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'my-node',
        component: MyNodeItemsComponent
      },
      {
        path: 'my-org',
        component: MyOrgItemsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
