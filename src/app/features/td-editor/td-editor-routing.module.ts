import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdEditorComponent } from './td-editor.component';

const routes: Routes = [
  {
    path: '',
    component: TdEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdEditorRoutingModule { }
