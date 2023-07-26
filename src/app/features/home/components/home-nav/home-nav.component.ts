import { Component } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Observable } from 'rxjs'

interface HomeNav {
  name: string
  path: string
  icon?: IconProp
  children?: HomeNav[]
}

const homeNav: HomeNav[] = [
  {
    name: 'My Node',
    path: '/home/my-node/',
    icon: 'circle-nodes',
  },
  {
    name: 'Items',
    path: '/home/items/',
    icon: 'list',
    children: [
      {
        name: 'This Node',
        path: 'my-node',
      },
      {
        name: 'My Org',
        path: 'my-org',
      },
      {
        name: 'Partnership',
        path: 'partnership',
      },
      {
        name: 'Community',
        path: 'community',
      }
    ]
  },
  {
    name: 'Query',
    path: '/home/query/',
    icon: 'database',
    children: [
      {
        name: 'This Node',
        path: 'my-node',
      },
      {
        name: 'My Org',
        path: 'my-org',
      },
      {
        name: 'Partnership',
        path: 'partnership',
      },
      {
        name: 'Community',
        path: 'community',
      }
    ]
  },
]

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent {

  constructor(private _adminService: AdminService) {
  }

  get menuFolded$(): Observable<boolean> {
    return this._adminService.menuFolded$
  }

  get nav(): HomeNav[] {
    return homeNav
  }
}
