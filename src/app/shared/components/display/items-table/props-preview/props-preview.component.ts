import { Component, Input, ViewChild } from '@angular/core'
import { PropertyUI } from '@core/models/item.model'
import { OverlayPanel } from 'primeng/overlaypanel'
import { delay, inflect } from 'src/app/utils'

@Component({
  selector: 'app-props-preview',
  templateUrl: './props-preview.component.html',
  styleUrls: ['./props-preview.component.scss'],
})
export class PropsPreviewComponent {
  @ViewChild('op') op!: OverlayPanel

  @Input() properties: PropertyUI[] = []

  inflectPropNum(num: number) {
    return inflect(num, 'No properties', `property`, `properties`)
  }

  showOp(event: Event) {
    this.op.show(event)
  }

  hideOp() {
    this.op.hide()
  }

  get length(): number {
    return this.properties.length
  }

  get displayProperties(): PropertyUI[] {
    return this.properties.slice(0, 5)
  }

  get moreThen5(): boolean {
    return this.properties.length > 5
  }
}
