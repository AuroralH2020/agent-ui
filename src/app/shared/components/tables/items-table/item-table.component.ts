import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { ItemType, ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { CheckboxGroupItem } from '@shared/models/checkbox-group.modele'
import { Sidebar } from 'primeng/sidebar'
import { Table } from 'primeng/table'
import { itemTypes } from 'src/app/data'
import { inflect } from 'src/app/utils'
import { FilterService } from 'primeng/api'

@Component({
  selector: 'app-items-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemsTableComponent implements OnInit {
  @ViewChild('dt') dt!: Table
  @ViewChild('sb') sb!: Sidebar

  filterVisible: boolean = false

  typesFilter: CheckboxGroupItem[] = []
  selectedTypesFilter: CheckboxGroupItem[] = []

  @ContentChild('header') header: TemplateRef<any> | undefined
  @ContentChild('actions') actions: TemplateRef<any> | undefined
  @Input() itemsUI: ItemUI[] = []
  @Input() showSearch: boolean = true
  @Input() showTable: boolean = true
  @Input() loadingData: boolean = false
  @Input() linkToDetail!: string
  @Input() state: any
  @Input() initialTypeFilter: ItemType[] | undefined

  constructor(private _itemsService: ItemsService, private _filterService: FilterService) {
    this.typesFilter = itemTypes.map((element) => {
      return { value: element, key: element.id }
    })
    this.typesFilter[0].value.title = 'Unknown'
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.selectedTypesFilter = this.initialTypeFilter
    //     ? this.initialTypeFilter.map((element) => {
    //         return {
    //           key: element.id,
    //           value: element,
    //         }
    //       })
    //     : this.typesFilter
    //   this._filter()
    // })
    this.selectedTypesFilter = this.initialTypeFilter
      ? this.initialTypeFilter.map((element) => {
          return {
            key: element.id,
            value: element,
          }
        })
      : this.typesFilter
    setTimeout(() => {
      this._filter()
    })
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
    this.dt.filter(searchValue, 'name', 'contains')
  }

  filter(event: Event) {
    this._filter()
    this.sb.close(event)
  }

  clearFilter(event: Event) {
    this.dt.value = this.itemsUI
    this.selectedTypesFilter = this.typesFilter
    this.sb.close(event)
  }

  combineState(item: ItemUI) {
    return { item, ...this.state }
  }

  isNew(item: ItemUI): boolean {
    return this._itemsService.isNew(item)
  }

  searchTypesFilter = (value: string) => {
    return this.typesFilter.filter((element) => element.value.title.toLowerCase().startsWith(value.toLowerCase()))
  }

  private _filter() {
    this.dt.value = this.itemsUI.filter((item) =>
      this.selectedTypesFilter.some((type) => type.value.id === item.type.id)
    )
  }

  get itemsCount(): string {
    const count = this.itemsUI.length
    return inflect(count, '0 items', '1 item', `${count} items`)
  }

  get filterActive(): boolean {
    return this.selectedTypesFilter.length !== itemTypes.length
  }
}
