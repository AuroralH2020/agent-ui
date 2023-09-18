import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { QueryRoutingModule } from './query-routing.module'
import { QueryComponent } from './query.component'
import { MyNodeQueryComponent } from './my-node-query/my-node-query.component'
import { MyOrgQueryComponent } from './my-org-query/my-org-query.component'
import { CommunityQueryComponent } from './community-query/community-query.component'
import { PartnershipQueryComponent } from './partnership-query/partnership-query.component'
import { RunQueryComponent } from './components/run-query/run-query.component'
import { SelectCommunityDialogComponent } from './components/select-community-dialog/select-community-dialog.component'
import { SelectPartnerDialogComponent } from './components/select-partner-dialog/select-partner-dialog.component';

@NgModule({
  declarations: [
    QueryComponent,
    MyNodeQueryComponent,
    MyOrgQueryComponent,
    CommunityQueryComponent,
    PartnershipQueryComponent,
    RunQueryComponent,
    SelectCommunityDialogComponent,
    SelectPartnerDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QueryRoutingModule,
  ],
})
export class QueryModule {}
