import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemsComponent } from './items.component'
import { MyOrgItemsComponent } from './my-org-items/my-org-items.component'
import { NodeItemsComponent } from './node-items/node-items.component'

const routes: Routes = [
    {
        path: '',
        component: NodeItemsComponent,
        data: {
          saveComponent: true,
        },
      },
      {
        path: 'my-org',
        component: MyOrgItemsComponent,
        data: {
          saveComponent: true,
        },
      },
      {
        path: 'my-node',
        component: ItemsComponent,
        data: {
          saveComponent: true,
        },
      },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
