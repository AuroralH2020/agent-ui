import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { map } from 'rxjs'
import { Location } from '@angular/common'
import { ConfirmationService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { TdEditorComponent } from '../components/td-editor/td-editor.component'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.scss'],
  providers: [ConfirmationService, DialogService],
})
export class NodeItemComponent implements OnInit {
  item!: ItemUI

  loadingRemove: boolean = false

  ref: DynamicDialogRef | undefined

  constructor(
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _location: Location,
    private _confirmationService: ConfirmationService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    const oid = this._activatedRoute.snapshot.paramMap.get('oid')
    if (!oid) {
      this._router.navigate(['/'])
    }
    const item = this._itemsService.myItems.find((element) => element.oid === oid)
    if (!item) {
      this._router.navigate(['/'])
    }
    this.item = item!
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }

  showTD(edit: boolean) {
    this.ref = this._dialogService.open(TdEditorComponent, {
      header: `${this.item.name ?? 'Item'}'s Thing Description`,
      width: '1200px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        edit,
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

  removeItem() {
    this._confirmationService.confirm({
      message: `You will remove the item from your node and all metadata will be lost. Are you sure that you want to proceed?`,
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this._removeItem()
      },
    })
  }

  private async _removeItem() {
    this.loadingRemove = true
    try {
      await this._itemsService.removeItems([this.item.oid])
      this._location.back()
    } finally {
      this.loadingRemove = false
    }
  }
}
