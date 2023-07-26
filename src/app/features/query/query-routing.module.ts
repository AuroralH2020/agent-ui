import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './query.component';
import { MyNodeQueryComponent } from './my-node-query/my-node-query.component';
import { CommunityQueryComponent } from './community-query/community-query.component';
import { MyOrgQueryComponent } from './my-org-query/my-org-query.component';
import { PartnershipQueryComponent } from './partnership-query/partnership-query.component';

const routes: Routes = [
  {
    path: '',
    component: QueryComponent,
    children: [
      {
        path: 'my-node',
        component: MyNodeQueryComponent,
        data: {
          saveComponent: true
        }
      },
      {
        path: 'my-org',
        component: MyOrgQueryComponent,
        data: {
          saveComponent: true
        }
      },
      {
        path: 'community',
        component: CommunityQueryComponent,
        data: {
          saveComponent: true
        }
      },
      {
        path: 'partnership',
        component: PartnershipQueryComponent,
        data: {
          saveComponent: true
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
