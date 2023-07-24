import { Component, Input } from '@angular/core';
import { Size } from '../pictogram/pictogram.component';

@Component({
  selector: 'app-org-pictogram',
  templateUrl: './org-pictogram.component.html',
  styleUrls: ['./org-pictogram.component.scss']
})
export class OrgPictogramComponent {
  @Input() organisation!: string
  @Input() width?: number
  @Input() minWidth?: number
  @Input() size?: Size
}
