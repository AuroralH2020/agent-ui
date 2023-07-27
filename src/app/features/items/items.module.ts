import { NgModule } from '@angular/core'

import { ItemsRoutingModule } from './items-routing.module'
import { MyOrgItemsComponent } from './my-org-items/my-org-items.component'
import { MyNodeItemsComponent } from './my-node-items/my-node-items.component'
import { ItemsComponent } from './items.component'
import { SharedModule } from '@shared/shared.module'
import { CreateItemComponent } from './components/create-item/create-item.component'
import { ActionsComponent } from './my-node-items/components/actions/actions.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    ItemsComponent,
    MyOrgItemsComponent,
    MyNodeItemsComponent,
    CreateItemComponent,
    ActionsComponent,
  ],
  imports: [CommonModule, SharedModule, ItemsRoutingModule],
})
export class ItemsModule {}
