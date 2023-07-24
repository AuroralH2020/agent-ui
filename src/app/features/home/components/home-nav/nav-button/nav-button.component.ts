import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AdminService } from '@core/services/admin/admin.service'
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() path: string = ''
  @Input() name: string | undefined
  @Input() icon: IconProp | undefined
  @Input() symbol: string | undefined

  constructor(private _router: Router, private _adminService: AdminService) {}

  ngOnInit(): void {}

  navigate(): void {
    this._router.navigateByUrl(this.path)
  }

  get isActive(): boolean {
    return this._router.url.endsWith(this.path)
  }

  get menuFolded$(): Observable<boolean> {
    return this._adminService.menuFolded$
  }
}
