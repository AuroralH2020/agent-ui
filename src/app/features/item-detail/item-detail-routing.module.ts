import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartnershipItemComponent } from './partnership-item/partnership-item.component'
import { ItemDetailComponent } from './item-detail.component'
import { NodeItemComponent } from './node-item/node-item.component'
import { CommunityItemComponent } from './community-item/community-item.component'
import { MyOrgItemComponent } from './my-org-item/my-org-item.component'

const routes: Routes = [
  {
    path: '',
    component: ItemDetailComponent,
    children: [
      {
        path: 'node/:oid',
        component: NodeItemComponent,
      },
      {
        path: 'myorg/:oid',
        component: MyOrgItemComponent,
      },
      {
        path: 'community/:oid',
        component: CommunityItemComponent,
      },
      {
        path: 'partnership/:oid',
        component: PartnershipItemComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailRoutingModule {}
