import { Component } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-my-node-query',
  templateUrl: './my-node-query.component.html',
  styleUrls: ['./my-node-query.component.scss'],
})
export class MyNodeQueryComponent {
  constructor(private _nodesService: NodesService) {}

  runQuery = (query: string): Promise<any> => {
    return this._nodesService.queryLocalNode(query)
  }
}
