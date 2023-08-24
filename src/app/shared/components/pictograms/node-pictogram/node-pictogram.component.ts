import { Component, Input, OnInit } from '@angular/core';
import { NodesService } from '@core/services/nodes/nodes.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';
import { Size } from '../pictogram.component';

@Component({
  selector: 'app-node-pictogram',
  templateUrl: './node-pictogram.component.html',
  styleUrls: ['./node-pictogram.component.scss']
})
export class NodePictogramComponent implements OnInit {

  @Input() width?: number
  @Input() size?: Size

  constructor(private _nodeService: NodesService) { }

  ngOnInit(): void {
  }

  get agid(): string {
    return this._nodeService.myNode.agid
  }

}
