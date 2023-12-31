import { Component } from '@angular/core';
import { ItemUI } from '@core/models/item.model';
import { ItemsService } from '@core/services/item/item.service';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-my-org',
  templateUrl: './my-org.component.html',
  styleUrls: ['./my-org.component.scss']
})
export class MyOrgComponent {
  itemsUI: ItemUI[] = [];

  constructor(
    private _itemsService: ItemsService,
    private _nodesService: NodesService,
  ) {}

  ngOnInit(): void {
    this.itemsUI = this._itemsService.myOrgItems ?? []
  }

  get organisation(): string {
    return this._nodesService.myNode.organisation
  }
}
