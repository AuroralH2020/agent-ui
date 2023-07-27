import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { untilDestroyed } from '@ngneat/until-destroy'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { map } from 'rxjs'
import { TdEditorComponent } from '../components/td-editor/td-editor.component'

@Component({
  selector: 'app-my-org-item',
  templateUrl: './my-org-item.component.html',
  styleUrls: ['./my-org-item.component.scss'],
  providers: [DialogService]
})
export class MyOrgItemComponent {
  item!: ItemUI

  ref: DynamicDialogRef | undefined

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _dialogService: DialogService,
  ) {}

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

  showTD() {
    this.ref = this._dialogService.open(TdEditorComponent, {
      header: `${this.item.name ?? 'Item'}'s Thing Description`,
      width: '1200px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        edit: false,
        item: this.item,
      },
    })
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }

  get oidOfmyNodesFirstItem(): string | undefined {
    const items = this._itemsService.myItems
    if (!items || items.length <= 0) return
    return items[0].oid
  }
}
