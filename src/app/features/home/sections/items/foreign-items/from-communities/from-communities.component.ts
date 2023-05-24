import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Community } from '@core/models/collaboration.model'
import { ItemConvert, ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { SelectCommunityDialogComponent } from '@features/home/components/select-community-dialog/select-community-dialog.component'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { Table } from 'primeng/table'
@Component({
  selector: 'app-from-communities',
  templateUrl: './from-communities.component.html',
  styleUrls: ['./from-communities.component.scss'],
  providers: [DialogService],
})
export class FromCommunitiesComponent implements OnInit, OnDestroy {
  loading: boolean = false

  communityItemsUI: ItemUI[] = []

  selectedCommunity: Community | undefined

  detailDialogRef!: DynamicDialogRef

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.detailDialogRef) {
      this.detailDialogRef.close()
    }
  }

  openSelectCommunityDialog() {
    this.detailDialogRef = this._dialogService.open(SelectCommunityDialogComponent, {
      header: 'Select a community',
      width: '600px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closeOnEscape: true,
      dismissableMask: true,
    })

    this.detailDialogRef.onClose.subscribe((community: Community) => {
      this._getData(community)
    })
  }

  private async _getData(community: Community | undefined | null): Promise<void> {
    if (community) {
      this.selectedCommunity = community
      this.loading = true
      const nodes = await this._nodesService.getNodesFromCommunity(community.commId)
      let agids = nodes.map((element) => element.agid)
      if (agids.length == 0) {
        this.communityItemsUI = []
        this.loading = false
        return
      }
      const itemsServer = await this._itemsService.getItems(agids)
      this.communityItemsUI = ItemConvert.toItemsUI(itemsServer)
      this.loading = false
    }
  }
}
