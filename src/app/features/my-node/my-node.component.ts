import { Component, OnInit } from '@angular/core'
import { Community, PartnerUI } from '@core/models/collaboration.model'
import { ItemType, ItemUI } from '@core/models/item.model'
import { MyNode } from '@core/models/node.model'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

interface _TypeStatItem {
  value: number
  type: ItemType
}

@UntilDestroy()
@Component({
  selector: 'app-my-node',
  templateUrl: './my-node.component.html',
  styleUrls: ['./my-node.component.scss'],
})
export class MyNodeComponent implements OnInit {
  typeStats: _TypeStatItem[] = []

  constructor(
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService
  ) {}

  ngOnInit(): void {
    this._loadTypeStats()
    this._itemsService.myItems$.pipe(untilDestroyed(this)).subscribe((value) => {
      this._loadTypeStats()
    })
  }

  private _loadTypeStats() {
    this.typeStats = []
    for (const item of this._itemsService.myItems) {
      const candidate = this.typeStats.find((element) => element.type.id === item.type.id)
      if (candidate) {
        candidate.value++
      } else {
        this.typeStats.push({
          value: 1,
          type: item.type,
        })
      }
    }
  }

  get myNode(): MyNode {
    return this._nodeService.myNode
  }

  get myItems(): ItemUI[] {
    return this._itemsService.myItems
  }

  get myOrgItems(): ItemUI[] {
    return this._itemsService.myOrgItems
  }

  get partnerships(): PartnerUI[] {
    return this._collaborationService.partnerships ?? []
  }

  get communities(): Community[] {
    return this._collaborationService.communities ?? []
  }

  get lastConfigurationUpdate(): Date {
    return this.myNode.last_configuration_update
  }

  get lastPartnersUpdate(): Date {
    return this.myNode.last_partners_update
  }

  get lastPrivacyUpdate(): Date {
    return this.myNode.last_privacy_update
  }
}
