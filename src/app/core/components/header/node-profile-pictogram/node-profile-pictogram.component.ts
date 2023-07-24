import { Component, Input, OnInit } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'

type Size = 'small' | 'large'

@Component({
  selector: 'app-node-profile-pictogram',
  templateUrl: './node-profile-pictogram.component.html',
  styleUrls: ['./node-profile-pictogram.component.scss'],
})
export class NodeProfilePictogramComponent implements OnInit {
  @Input() size: Size = 'small'

  constructor(private _nodeService: NodesService) {}

  ngOnInit(): void {}

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }
}
