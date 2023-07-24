import { Component } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _adminService: AdminService) {}

  toggleMenu = () => {
    this._adminService.toggleMenu()
  }

  get folded$(): Observable<boolean> {
    return this._adminService.menuFolded$
  }
}
