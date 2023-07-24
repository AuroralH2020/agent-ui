import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'

@UntilDestroy()
@Component({
  selector: 'app-td-editor',
  templateUrl: './td-editor.component.html',
  styleUrls: ['./td-editor.component.scss'],
})
export class TdEditorComponent implements OnInit {
  td: FormControl = new FormControl('', {
    validators: [Validators.required],
  })
  item?: ItemUI
  edit: boolean = false

  loading: boolean = false
  updating: boolean = false

  constructor(
    private _dialogRef: DynamicDialogRef,
    private _config: DynamicDialogConfig,
    private _itemsService: ItemsService
  ) {
    this.item = _config.data?.item
    this.edit = _config.data?.edit ?? false
  }
  ngOnInit(): void {
    this._init()
  }

  private async _init() {
    if (this.item) {
      this.loading = true
      try {
        const td = await this._itemsService.getLocalTD(this.item.oid)
        this.td.setValue(JSON.stringify(td, null, 2))
      } finally {
        this.loading = false
      }
    }
  }

  async updateItem() {
    if (this.td.valid) {
      this.updating = true
      try {
        await this._itemsService.updateItem(JSON.parse(this.td.value))
        this._dialogRef.close(true)
      } finally {
        this.updating = false
      }
    }
  }

  get thingDescription(): string {
    return this.td.value
  }
}
