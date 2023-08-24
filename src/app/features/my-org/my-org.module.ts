import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrgRoutingModule } from './my-org-routing.module';
import { MyOrgComponent } from './my-org.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MyOrgComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyOrgRoutingModule
  ]
})
export class MyOrgModule { }
