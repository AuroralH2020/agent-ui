import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ItemsService } from '@core/services/item/item.service'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  loading: boolean = false

  td: FormControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  tdStr: string = ''

  constructor(
    private _config: DynamicDialogConfig,
    private _ref: DynamicDialogRef,
    private _itemsService: ItemsService,
    private _router: Router,
  ) {
    const td = _config.data?.td
    this.tdStr = JSON.stringify(td, null, 2)
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.td.setValue(this.tdStr)
    }, 0)
  }

  async createItem() {
    if (this.td.valid) {
      const td = this.td.value
      this.loading = true
      try {
        await this._itemsService.registerNewItem(JSON.parse(td))
        this._ref.close()
        this._router.navigateByUrl('/home/items/my-node')
      } finally {
        this.loading = false
      }
    }
  }
}
