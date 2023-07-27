import { Component, OnInit } from '@angular/core'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { delay } from './utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean = false
  showInfo: boolean = false

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService
  ) {
    return
  }

  ngOnInit(): void {
    this.initApp()
    this.showInfoAfterDelay()
  }

  async showInfoAfterDelay() {
    await delay(5000)
    this.showInfo = true
  }

  async initApp() {
    this.loading = true
    await this._nodesService.initNodes()
    const myOrgAgids = this._nodesService.myOrgNodes.map((element) => {
      return element.agid;
    })
    await this._itemsService.initItems(myOrgAgids)
    await this._collaborationService.initCollaboration()
    this.loading = false
  }
}
