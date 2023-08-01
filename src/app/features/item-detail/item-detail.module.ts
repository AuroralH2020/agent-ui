import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { NodeItemComponent } from './node-item/node-item.component'
import { CommunityItemComponent } from './community-item/community-item.component'
import { PartnershipItemComponent } from './partnership-item/partnership-item.component'
import { ItemDetailRoutingModule } from './item-detail-routing.module'
import { ItemDetailComponent } from './item-detail.component'
import { DetailComponent } from './components/detail/detail.component'
import { ConsumePropComponent } from './components/consume-prop/consume-prop.component'
import { ConsumePropSheetComponent } from './components/consume-prop/consume-prop-sheet/consume-prop-sheet.component'
import { MyOrgItemComponent } from './my-org-item/my-org-item.component'
import { RequestBuilderComponent } from './components/consume-prop/consume-prop-sheet/request-builder/request-builder.component'
import { TdEditorComponent } from './components/td-editor/td-editor.component';
import { ShowTdButtonComponent } from './components/show-td-button/show-td-button.component';

@NgModule({
  declarations: [
    NodeItemComponent,
    CommunityItemComponent,
    PartnershipItemComponent,
    ItemDetailComponent,
    DetailComponent,
    ConsumePropComponent,
    ConsumePropSheetComponent,
    MyOrgItemComponent,
    RequestBuilderComponent,
    TdEditorComponent,
    ShowTdButtonComponent,
  ],
  imports: [CommonModule, SharedModule, ItemDetailRoutingModule],
})
export class ItemDetailModule {}
