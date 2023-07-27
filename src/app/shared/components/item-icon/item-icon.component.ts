import { Component, Input, OnInit } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.scss'],
})
export class ItemIconComponent implements OnInit {
  @Input() item!: ItemUI

  constructor() {}

  ngOnInit(): void {
  }

  get iconColor(): string {
    return this.item.type.color
  }

  get icon(): IconProp {
    return this.item.type.icon
  }
}
