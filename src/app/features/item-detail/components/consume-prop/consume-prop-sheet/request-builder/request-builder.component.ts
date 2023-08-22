import { AfterViewInit, Component, ElementRef, Inject, Input, QueryList, ViewChildren } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

export interface RequestParam {
  key: string
  value: string
}

export type RequestType = 'get' | 'put'

@UntilDestroy()
@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.scss'],
})
export class RequestBuilderComponent implements AfterViewInit {

  @Input() requestType: RequestType = 'get'
  @Input() oid!: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  @ViewChildren('key') keys!: QueryList<ElementRef>;

  queryResult: any

  loading = false

  addBody: boolean = false
  requestParams: RequestParam[] = []
  body: FormControl = new FormControl<string>('')

  constructor(private _itemsService: ItemsService, @Inject('BASE_URL') private _baseUrl: string) { }

  ngAfterViewInit() {
    this.keys.changes.pipe(untilDestroyed(this)).subscribe(children => {
      const last = children.last
      if (last && last.nativeElement) {
        last.nativeElement.focus();
      }
    });
  }

  addParam() {
    const key = ''
    const value = ''
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
      const key = element.key
      const value = element.value
      retval[key] = value
    })
    return retval
  }

  async consume() {
    this.loading = true
    const params = this._parseParams()
    const body = this.body.value
    try {
      let data = {}
      switch (this.requestType) {
        case 'get':
          this.queryResult = await this._itemsService.getDataFromProperty(this.oid, this.item.oid, this.prop.pid, params)
          break;
        case 'put':
          this.queryResult = await this._itemsService.updateProperty(this.oid, this.item.oid, this.prop.pid, params, body)
          break;
      }
    }
    finally {
      this.loading = false
    }
  }

  get url(): string {
    const params = this.requestParams.map(param => `${param.key}=${param.value}`).join('&')
    return `${this._baseUrl}/api/properties/${this.oid}/${this.item.oid}/${this.prop.pid}${params.length > 0 ? `?${params}` : ''}`
  }
}
