import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnershipComponent } from './partnership.component';

const routes: Routes = [
  {
    path: '',
    component: PartnershipComponent,
    data: {
      saveComponent: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipRoutingModule { }
