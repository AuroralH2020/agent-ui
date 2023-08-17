import { Component, HostListener, NgZone } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { CreateItemComponent } from './components/create-item/create-item.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-td-editor',
  templateUrl: './td-editor.component.html',
  styleUrls: ['./td-editor.component.scss'],
  providers: [DialogService],
})
export class TdEditorComponent {
  ref: DynamicDialogRef | undefined

  constructor(private _dialogService: DialogService, private _router: Router, private _zone: NgZone) { }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent) {
    console.log('here')
    console.log(event.data)
    const data = event.data
    if (data) {
      this._zone.run(() => {
        this._handle(data)
      })
    }
  }

  private _handle(data: any) {
    if (typeof data === 'string' || data instanceof String) {
      if (data === 'close') {
        this._router.navigateByUrl('/home/items/my-node')
      }
    } else {
      if (data && data.name && data.td) {
        this.ref = this._dialogService.open(CreateItemComponent, {
          width: '900px',
          height: 'calc(100vh - 80px)',
          header: (data.name ?? 'Item') + "'s Thing Desctiption",
          data: { td: data.td },
        })
      }
    }
  }
}
