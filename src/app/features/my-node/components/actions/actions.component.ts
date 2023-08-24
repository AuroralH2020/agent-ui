import { Component, Input } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { ConfirmationService } from 'primeng/api'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  providers: [ConfirmationService],
})
export class ActionsComponent {
  @Input() item!: ItemUI

  deleting: boolean = false

  constructor(
    private _confirmationService: ConfirmationService,
    private _itemsService: ItemsService,
    private _snackbar: SnackBarService
  ) {}

  deleteItem(item: ItemUI, event: Event) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Are you sure that you want to delete the item: ${item.name}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._deleteItem(item)
      },
    })
    event.stopPropagation()
  }

  private async _deleteItem(item: ItemUI) {
    this.deleting = true
    try {
      await this._itemsService.removeItems([this.item.oid])
      this._snackbar.showSuccess(`Item: ${this.item.name} has been deleted`)
    } finally {
      this.deleting = false
    }
  }
}
