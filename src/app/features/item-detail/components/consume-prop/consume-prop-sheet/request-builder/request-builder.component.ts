import { Component, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'

export interface RequestParam {
  key: FormControl
  value: FormControl
}

export type RequestType = 'get' | 'put'

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.scss'],
})
export class RequestBuilderComponent {

  @Input() requestType: RequestType = 'get'
  @Input() oid!: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  control: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });
  loading = false
  showResult = false

  addBody: boolean = false
  requestParams: RequestParam[] = []
  body: FormControl = new FormControl<string>('')

  constructor(private _itemsService: ItemsService) { }

  ngOnInit(): void { }

  addParam() {
    const key = new FormControl<string>('')
    const value = new FormControl<string>('')
    this.requestParams.push({ key, value })
  }

  removeParam(param: RequestParam) {
    const index = this.requestParams.indexOf(param, 0)
    if (index > -1) {
      this.requestParams.splice(index, 1)
    }
  }

  clearParam() {
    this.requestParams.splice(0, this.requestParams.length)
  }

  private _parseParams(): Record<string, string> | undefined {
    if (this.requestParams.length === 0) {
      return undefined
    }
    let retval: Record<string, string> = {}
    this.requestParams.forEach((element) => {
      const key = element.key.value as string
      const value = element.value.value as string
      retval[key] = value
    })
    return retval
  }

  async consume() {
    this.showResult = true;
    this.loading = true
    const params = this._parseParams()
    const body = this.body.value
    try {
      let data = {}
      switch (this.requestType) {
        case 'get':
          data = await this._itemsService.getDataFromProperty(this.oid, this.item.oid, this.prop.pid, params)
          setTimeout(() => {
            this.control.setValue(JSON.stringify(data, null, 2))
          }, 0)
          break;
        case 'put':
          data = await this._itemsService.updateProperty(this.oid, this.item.oid, this.prop.pid, params, body)
          setTimeout(() => {
            this.control.setValue(JSON.stringify(data, null, 2))
          }, 0)
          break;
      }
    }
    catch (e) {
      this.loading = false
      this.showResult = false
    }
    this.loading = false
  }
}
