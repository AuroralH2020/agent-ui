import { NgModule } from '@angular/core'

import { ItemsRoutingModule } from './items-routing.module'
import { MyOrgItemsComponent } from './my-org-items/my-org-items.component'
import { MyNodeItemsComponent } from './my-node-items/my-node-items.component'
import { CommunityItemsComponent } from './community-items/community-items.component'
import { PartnershipItemsComponent } from './partnership-items/partnership-items.component'
import { ItemTableComponent } from './components/item-table/item-table.component'
import { ItemsComponent } from './items.component'
import { SharedModule } from '@shared/shared.module'
import { PropsPreviewComponent } from './components/item-table/props-preview/props-preview.component'
import { CreateItemComponent } from './components/create-item/create-item.component'
import { ActionsComponent } from './my-node-items/components/actions/actions.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    ItemsComponent,
    MyOrgItemsComponent,
    MyNodeItemsComponent,
    CommunityItemsComponent,
    PartnershipItemsComponent,
    ItemTableComponent,
    PropsPreviewComponent,
    CreateItemComponent,
    ActionsComponent,
  ],
  imports: [CommonModule, SharedModule, ItemsRoutingModule],
})
export class ItemsModule {}
