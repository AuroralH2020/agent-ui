import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartnershipRoutingModule } from './partnership-routing.module'
import { PartnershipComponent } from './partnership.component'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [PartnershipComponent],
  imports: [CommonModule, PartnershipRoutingModule, SharedModule],
})
export class PartnershipModule {}
