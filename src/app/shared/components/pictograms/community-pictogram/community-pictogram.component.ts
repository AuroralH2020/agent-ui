import { Component, Input } from '@angular/core'
import { Community } from '@core/models/collaboration.model'
import { Size } from '../pictogram/pictogram.component'

@Component({
  selector: 'app-community-pictogram',
  templateUrl: './community-pictogram.component.html',
  styleUrls: ['./community-pictogram.component.scss'],
})
export class CommunityPictogramComponent {
  @Input() community!: string
  @Input() description?: string
  @Input() width?: number
  @Input() minWidth?: number
  @Input() size?: Size
}
