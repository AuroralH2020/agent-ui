import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '@core/services/admin/admin.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent implements OnInit {
  @Input() path!: string
  @Input() name: string | undefined
  @Input() icon: IconProp | undefined
  @Input() marginTop: string | undefined

  folded: boolean = true

  constructor(private _router: Router, private _adminService: AdminService) {}

  ngOnInit(): void {
    this.folded = !this._router.url.startsWith(this.path)
  }

  toggleFolded() {
    this.folded = !this.folded
  }

  get menuFolded$(): Observable<boolean> {
    return this._adminService.menuFolded$
  }
}
