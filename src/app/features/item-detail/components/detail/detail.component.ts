import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { Location } from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() back: string = 'Items'
  @Input() item!: ItemUI
  @Input() organisation?: string
  @ContentChild('infoBodyRef') infoBodyRef: TemplateRef<any> | undefined
  @ContentChild('propsInfoRef') propsInfoRef: TemplateRef<any> | undefined
  @ContentChild('propsHeaderRef') propsHeaderRef: TemplateRef<any> | undefined
  @ContentChild('propsBodyRef') propsBodyRef: TemplateRef<any> | undefined

  constructor(private _location: Location) {}

  ngOnInit(): void {}

  onBack() {
    this._location.back()
  }

  get tableHeight(): string {
    return `calc(100vh - ${this.propsInfoRef ? 422 : 366}px)`
  }
}
