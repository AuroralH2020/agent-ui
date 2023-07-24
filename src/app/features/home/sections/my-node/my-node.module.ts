import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { MyNodeRoutingModule } from './my-node-routing.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, MyNodeRoutingModule],
})
export class MyNodeModule {}
