import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemUI } from '@core/models/item.model';
import { Settings } from '@core/models/settings.model';
import { ItemsService } from '@core/services/item/item.service';

@Component({
  selector: 'app-my-org-data-connector',
  templateUrl: './my-org-data-connector.component.html',
  styleUrls: ['./my-org-data-connector.component.scss']
})
export class MyOrgDataConnectorComponent {

  @Input() settings!: Settings
  @Output() onChange: EventEmitter<void> = new EventEmitter()

  showDialog: boolean = false

  constructor(private _itemsService: ItemsService) {
    
  }

  changeDataConnector(item: ItemUI | null) {
    this.settings.myOrgDataConnector = item
    this.onChange.emit()
    this.showDialog = false
  }

  get myItems() {
    return this._itemsService.myItems
  }

}
