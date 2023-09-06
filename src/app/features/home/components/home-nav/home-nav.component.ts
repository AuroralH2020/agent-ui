import { Component } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Observable } from 'rxjs'

interface HomeNav {
  name: string
  path: string
  icon?: IconProp
  children?: HomeNav[]
  marginTop?: string
}

const homeNav: HomeNav[] = [
  {
    name: 'My Node',
    path: '/home/my-node',
    icon: 'circle-nodes',
  },
  {
    name: 'My Org',
    path: '/home/my-org',
    icon: 'user-group',
  },
  {
    name: 'Partnerships',
    path: '/home/partnership',
    icon: 'handshake',
  },
  {
    name: 'Communities',
    path: '/home/community',
    icon: 'users',
  },
  {
    name: 'Query',
    path: '/home/query',
    icon: 'database',
    children: [
      {
        name: 'My Node',
        path: '/my-node',
        icon: 'circle-nodes',
      },
      {
        name: 'My Org',
        path: '/my-org',
        icon: 'user-group',
      },
      {
        name: 'Partnership',
        path: '/partnership',
        icon: 'handshake',
      },
      {
        name: 'Community',
        path: '/community',
        icon: 'users',
      }
    ]
  },
  {
    name: 'Settings',
    path: '/home/settings/',
    icon: 'cog',
    marginTop: '24px',
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
