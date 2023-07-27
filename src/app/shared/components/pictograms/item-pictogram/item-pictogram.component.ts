import { Component, Input, OnInit } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Size } from '../pictogram/pictogram.component'
import tinycolor from 'tinycolor2'

@Component({
  selector: 'app-item-pictogram',
  templateUrl: './item-pictogram.component.html',
  styleUrls: ['./item-pictogram.component.scss'],
})
export class ItemPictogramComponent implements OnInit {
  @Input() item!: ItemUI
  @Input() size?: Size

  constructor() {}

  ngOnInit(): void {
    console.log(this.item.type)
  }

  get pictogramColor(): string {
    return this.item.type.color
  }

  get contentColor(): string {
    var color = tinycolor(this.pictogramColor)
    color = color.setAlpha(0.2)
    return color.toHex()
  }

  get itemIcon(): IconProp {
    return this.item.type.icon
  }
}
