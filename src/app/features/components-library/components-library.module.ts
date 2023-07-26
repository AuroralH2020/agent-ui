import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ComponentsLibraryRoutingModule } from './components-library-routing.module';
import { ComponentsLibraryComponent } from './components-library.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ComponentsLibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsLibraryRoutingModule
  ]
})
export class ComponentsLibraryModule { }
