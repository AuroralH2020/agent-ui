import { Component, OnInit } from '@angular/core'
import { Community, PartnerUI } from '@core/models/collaboration.model'
import { ItemUI } from '@core/models/item.model'
import { MyNode } from '@core/models/node.model'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-my-node',
  templateUrl: './my-node.component.html',
  styleUrls: ['./my-node.component.scss'],
})
export class MyNodeComponent implements OnInit {
  basicData: any
  basicOptions: any

  constructor(
    private _nodeService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService
  ) {}

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1,
        },
      ],
    }

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
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

  get partnerships(): PartnerUI[] | undefined {
    return this._collaborationService.partnerships
  }

  get communities(): Community[] | undefined {
    return this._collaborationService.communities
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
