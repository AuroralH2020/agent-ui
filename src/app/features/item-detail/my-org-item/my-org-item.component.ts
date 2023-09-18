import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { AdminService } from '@core/services/admin/admin.service'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-my-org-item',
  templateUrl: './my-org-item.component.html',
  styleUrls: ['./my-org-item.component.scss'],
})
export class MyOrgItemComponent {
  item!: ItemUI

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _adminService: AdminService,
  ) { }

  ngOnInit(): void {
    const oid = this._activatedRoute.snapshot.paramMap.get('oid')
    if (!oid) {
      this._router.navigate(['/'])
    }
    const item = this._itemsService.myOrgItems.find((element) => element.oid === oid)
    if (!item) {
      this._router.navigate(['/'])
    }
    this.item = item!
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }

  get myOrgDataConnector(): ItemUI | null {
    return this._adminService.settings.myOrgDataConnector
  }

  get oidOfmyNodesFirstItem(): string | undefined {
    const items = this._itemsService.myItems
    if (!items || items.length <= 0) return
    return items[0].oid
  }
}
