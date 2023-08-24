import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { SidebarComponent } from '@shared/components/overlays/sidebar/sidebar.component'

@Component({
  selector: 'app-consume-prop',
  templateUrl: './consume-prop.component.html',
  styleUrls: ['./consume-prop.component.scss'],
})
export class ConsumePropComponent implements OnInit {
  @Input() oid?: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI
  @Input() disabledTooltip?: string

  @ViewChild('sb') sb!: SidebarComponent

  showDetail: boolean = false

  constructor() {}

  ngOnInit(): void {}

  openDetailDialog() {
    if (this.oid) {
      this.showDetail = true
    }
  }

  ngOnDestroy() {}
}
