import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdEditorRoutingModule } from './td-editor-routing.module';
import { TdEditorComponent } from './td-editor.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TdEditorComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    TdEditorRoutingModule,
    SharedModule,
  ]
})
export class TdEditorModule { }
