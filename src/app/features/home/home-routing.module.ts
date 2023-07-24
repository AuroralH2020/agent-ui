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
          import('./sections/components-library/components-library.module').then((m) => m.ComponentsLibraryModule),
      },
      {
        path: 'my-node',
        loadChildren: () => import('./sections/my-node/my-node.module').then((m) => m.MyNodeModule),
      },
      {
        path: 'items',
        loadChildren: () => import('./sections/items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: 'query',
        loadChildren: () => import('./sections/query/query.module').then((m) => m.QueryModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
