import { Component, Input, OnInit } from '@angular/core'
import { ItemType } from '@core/models/item.model'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-type-icon',
  templateUrl: './type-icon.component.html',
  styleUrls: ['./type-icon.component.scss'],
})
export class TypeIconComponent implements OnInit {
  @Input() type!: ItemType

  constructor() {}

  ngOnInit(): void {
  }

  get iconColor(): string {
    return this.type.color
  }

  get icon(): IconProp {
    return this.type.icon
  }
}
