import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemsService } from '@core/services/item/item.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-create-item-button',
  templateUrl: './create-item-button.component.html',
  styleUrls: ['./create-item-button.component.scss']
})
export class CreateItemButtonComponent {

  @Input() td: string | null | undefined
  @Input() disabled: boolean = false
  @Output() onSuccess: EventEmitter<void> = new EventEmitter()

  loading: boolean = false

  constructor(
    private _itemsService: ItemsService,
    private _snackBar: SnackBarService,
  ) { }

  async createItem() {
    if (!this.td) return
    this.loading = true
    try {
      await this._itemsService.registerNewItem(JSON.parse(this.td))
      this._snackBar.showSuccess('Item created')
      this.onSuccess.emit()
    } finally {
      this.loading = false
    }
  }
}
