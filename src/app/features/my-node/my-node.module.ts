import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { MyNodeRoutingModule } from './my-node-routing.module'
import { MyNodeComponent } from './my-node.component'
import { ChartModule } from 'primeng/chart'

@NgModule({
  declarations: [MyNodeComponent],
  imports: [CommonModule, SharedModule, MyNodeRoutingModule, ChartModule],
})
export class MyNodeModule {}
