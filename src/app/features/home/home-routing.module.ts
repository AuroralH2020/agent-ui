import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'components',
        loadChildren: () =>
          import('../components-library/components-library.module').then((m) => m.ComponentsLibraryModule),
      },
      {
        path: 'my-node',
        loadChildren: () => import('../my-node/my-node.module').then((m) => m.MyNodeModule),
      },
      {
        path: 'my-org',
        loadChildren: () => import('../my-org/my-org.module').then((m) => m.MyOrgModule),
      },
      {
        path: 'partnership',
        loadChildren: () => import('../partnership/partnership.module').then((m) => m.PartnershipModule),
      },
      {
        path: 'community',
        loadChildren: () => import('../community/community.module').then((m) => m.CommunityModule),
      },
      {
        path: 'query',
        loadChildren: () => import('../query/query.module').then((m) => m.QueryModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
