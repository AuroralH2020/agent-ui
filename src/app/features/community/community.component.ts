import { Component, OnInit } from '@angular/core';
import { Community } from '@core/models/collaboration.model';
import { ItemUI } from '@core/models/item.model';
import { CollaborationService } from '@core/services/collaboration/collaboration.service';
import { ItemsService } from '@core/services/item/item.service';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  loading: boolean = false

  communityItemsUI: ItemUI[] = []

  selectedCommunity: Community | undefined

  communities!: Community[]
  displayedCommunities!: Community[]


  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService, 
  ) {}

  ngOnInit(): void {
    this.communities = this._collaborationService.communities ?? []
    this.displayedCommunities = this.communities
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.displayedCommunities = this.communities.filter((element) => element.name.toLowerCase().includes(searchValue))
  }

  selectCommunity(community: Community) {
    this.selectedCommunity = community
    this._getData()
  }


  private async _getData(): Promise<void> {
    if (this.selectedCommunity) {
      this.loading = true
      const nodes = await this._nodesService.getNodesFromCommunity(this.selectedCommunity.commId)
      let agids = nodes.map((element) => element.agid)
      if (agids.length == 0) {
        this.communityItemsUI = []
        this.loading = false
        return
      }
      this.communityItemsUI = await this._itemsService.getRemoteItems(agids)
      this.loading = false
    }
  }
}
