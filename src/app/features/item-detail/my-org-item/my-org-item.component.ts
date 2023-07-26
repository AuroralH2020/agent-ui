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
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      if (!res.item) this._router.navigate(['/'])
    })
  }

  showTD() {
    this.ref = this._dialogService.open(TdEditorComponent, {
      header: `${this.item.name ?? 'Item'}'s Thing Description`,
      width: '900px',
      height: 'calc(100vh - 80px)',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        edit: false,
        item: this.item,
      },
    })
    this.ref.onClose.pipe(untilDestroyed(this)).subscribe((updated) => {
      if (updated) {
        const item = this._itemsService.myItems.find((item) => item.oid === this.item.oid)
        if (item) {
          this.item = item
        }
      }
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
