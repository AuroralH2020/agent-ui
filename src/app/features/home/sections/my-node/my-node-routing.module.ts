import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNodeComponent } from './my-node.component';

const routes: Routes = [
  {
    path: '',
    component: MyNodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNodeRoutingModule { }
