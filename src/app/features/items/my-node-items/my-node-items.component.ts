import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ItemType, ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable, map } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'app-my-node-items',
  templateUrl: './my-node-items.component.html',
  styleUrls: ['./my-node-items.component.scss'],
})
export class MyNodeItemsComponent implements OnInit {
  initialTypeFilter: ItemType[] | undefined

  constructor(private _itemsService: ItemsService, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(untilDestroyed(this)).pipe(map(() => window.history.state)).subscribe((res) => {
      this.initialTypeFilter = res.typeFilter
    })
  }

  get itemsUI$(): Observable<ItemUI[]> {
    return this._itemsService.myItems$
  }
}
