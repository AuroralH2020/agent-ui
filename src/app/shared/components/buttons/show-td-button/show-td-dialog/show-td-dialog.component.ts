import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ItemUI } from '@core/models/item.model';
import { ItemsService } from '@core/services/item/item.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-show-td-dialog',
  templateUrl: './show-td-dialog.component.html',
  styleUrls: ['./show-td-dialog.component.scss']
})
export class ShowTdDialogComponent {
  td: FormControl = new FormControl('', {
    validators: [Validators.required],
  })
  item?: ItemUI
  edit: boolean = false
  remote: boolean = false
  showCopy: boolean = true
  allowEditTogle: boolean = true

  loading: boolean = false
  updating: boolean = false

  constructor(
    _config: DynamicDialogConfig,
    private _dialogRef: DynamicDialogRef,
    private _itemsService: ItemsService,
  ) {
    this.item = _config.data?.item
    this.edit = _config.data?.edit ?? false
    this.remote = _config.data?.remote ?? false
    this.showCopy = _config.data?.showCopy ?? true
    this.allowEditTogle = _config.data?.allowEditTogle ?? true
  }
  ngOnInit(): void {
    this._init()
  }

  private async _init() {
    if (this.item) {
      this.loading = true
      try {
        var td = null
        if (this.remote) {
          const agid = await this._itemsService.getItemsAgid(this.item.oid)
          td = await this._itemsService.getRemoteTD(agid, [this.item.oid])
        } else {
          td = await this._itemsService.getLocalTD(this.item.oid)
        }
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

  togleEdit() {
    this.edit = !this.edit
  }

  get thingDescription(): string {
    return this.td.value
  }
}
