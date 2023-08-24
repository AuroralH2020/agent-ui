import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { MyNodeRoutingModule } from './my-node-routing.module'
import { MyNodeComponent } from './my-node.component'

import { CreateItemComponent } from './components/create-item/create-item.component'
import { ActionsComponent } from './components/actions/actions.component'

@NgModule({
  declarations: [MyNodeComponent, CreateItemComponent, ActionsComponent],
  imports: [CommonModule, SharedModule, MyNodeRoutingModule],
})
export class MyNodeModule { }
