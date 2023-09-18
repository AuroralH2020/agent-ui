import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { Location } from '@angular/common'
import { ConfirmationService } from 'primeng/api'
import { UntilDestroy, } from '@ngneat/until-destroy'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'

@UntilDestroy()
@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.scss'],
  providers: [ConfirmationService],
})
export class NodeItemComponent implements OnInit {
  item!: ItemUI

  loadingRemove: boolean = false

  constructor(
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _location: Location,
    private _confirmationService: ConfirmationService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBar: SnackBarService,
  ) { }

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

  onUpdate() {
    const item = this._itemsService.myItems.find((item) => item.oid === this.item.oid)
    if (item) {
      this.item = item
    }
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
      this._snackBar.showSuccess(`Item ${this.item.name} removed`)
    } finally {
      this.loadingRemove = false
    }
  }
}
