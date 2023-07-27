import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { Table } from 'primeng/table'
import { inflect } from 'src/app/utils'

@Component({
  selector: 'app-items-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemsTableComponent implements OnInit {
  @ViewChild('dt') dt!: Table

  filterVisible: boolean = false
  selectedFilter: string = 'All'

  selectedItems: ItemUI[] = []

  @ContentChild('header') header: TemplateRef<any> | undefined
  @ContentChild('actions') actions: TemplateRef<any> | undefined
  @Input() itemsUI: ItemUI[] = []
  @Input() showSearch: boolean = true
  @Input() showTable: boolean = true
  @Input() loadingData: boolean = false
  @Input() linkToDetail!: string
  @Input() state: any

  constructor(private _itemsService: ItemsService) {}

  ngOnInit(): void {}

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
    this.dt.filter(searchValue, 'name', 'contains')
  }

  filter() {
    if (this.selectedFilter === 'All') {
      this.dt.reset()
    } else {
      this.dt.filter(this.selectedFilter, 'type', 'equals')
    }
  }

  combineState(item: ItemUI) {
    return { item, ...this.state }
  }

  isNew(item: ItemUI): boolean {
    return this._itemsService.isNew(item)
  }

  get itemsCount(): string {
    const count = this.itemsUI.length
    return inflect(count, '0 items', '1 item', `${count} items`)
  }
}
