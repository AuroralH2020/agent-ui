import { Component, OnInit } from '@angular/core'
import { ContractServer, PartnerUI } from '@core/models/collaboration.model'
import { ItemUI, ItemConvert } from '@core/models/item.model'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-partnership-items',
  templateUrl: './partnership-items.component.html',
  styleUrls: ['./partnership-items.component.scss'],
})
export class PartnershipItemsComponent implements OnInit {
  loading: boolean = false

  partnerItemsUI: ItemUI[] = []

  contractInfo: ContractServer | undefined

  selectedPartner: PartnerUI | undefined

  partners!: PartnerUI[]
  displayedPartners!: PartnerUI[]

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService
  ) {}

  ngOnInit(): void {
    this.partners = this._collaborationService.partnerships ?? []
    this.displayedPartners = this.partners
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase()
    this.displayedPartners = this.partners.filter((element) => element.name.toLowerCase().includes(searchValue))
  }

  selectPartner(partner: PartnerUI) {
    this.selectedPartner = partner
    this._getData()
  }

  private async _getData() {
    if (this.selectedPartner) {
      this.loading = true
      await this._getPartnerItems()
      await this._getContractInfo()
      this.loading = false
    }
  }

  private async _getPartnerItems(): Promise<void> {
    const nodes = await this._nodesService.getNodesFromPartnership(this.selectedPartner!.cid)
    let agids = nodes.map((element) => element.agid)
    if (agids.length == 0) {
      this.partnerItemsUI = []
      return
    }
    this.partnerItemsUI = await this._itemsService.getRemoteItems(agids)
  }

  private async _getContractInfo(): Promise<void> {
    this.contractInfo = await this._collaborationService.getContractInfo(this.selectedPartner!.cid)
  }
}
