import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { ItemsService } from '@core/services/item/item.service'
import { CreateItemComponent } from '@features/my-node/components/create-item/create-item.component'
import { MenuItem } from 'primeng/api'
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog'
import { Menu } from 'primeng/menu'

@Component({
  selector: 'app-new-item-button',
  templateUrl: './new-item-button.component.html',
  styleUrls: ['./new-item-button.component.scss'],
  providers: [DialogService],
})
export class NewItemButtonComponent implements OnInit {
  @ViewChild('menu') menu!: Menu

  addItemMenuOptions: MenuItem[] = [
    {
      label: 'Use Editor',
      icon: 'pi pi-file-edit',
      command: () => {
        this.openCreateItemDialog(true)
      },
    },
    {
      label: 'Upload TD',
      icon: 'pi pi-upload',
      command: () => {
        this.openCreateItemDialog(false)
      },
    },
  ]

  ref: DynamicDialogRef | undefined

  constructor(private _itemsService: ItemsService, private _dialogService: DialogService, private _router: Router) {}

  ngOnInit(): void {
    document.body.addEventListener('click', this._hideMenu)
  }

  toogleMenu(event: MouseEvent) {
    if (!this.menu.visible) {
      this.menu.show(event)
      event.stopPropagation()
    }
  }

  private _hideMenu = () => {
    if (this.menu.visible) {
      this.menu.hide()
    }
  }

  openCreateItemDialog(tdEditor: boolean) {
    if (tdEditor) {
      this._router.navigateByUrl('/td-editor')
    } else {
      this.ref = this._dialogService.open(CreateItemComponent, {
        header: 'Create New Item',
        width: '900px',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
      })
    }
  }
}
