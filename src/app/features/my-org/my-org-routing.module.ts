import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrgComponent } from './my-org.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrgRoutingModule { }
