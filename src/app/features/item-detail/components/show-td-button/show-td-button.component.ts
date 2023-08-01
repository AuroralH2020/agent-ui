import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TdEditorComponent } from '../td-editor/td-editor.component';
import { ItemUI } from '@core/models/item.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-show-td-button',
  templateUrl: './show-td-button.component.html',
  styleUrls: ['./show-td-button.component.scss'],
  providers: [DialogService]
})
export class ShowTdButtonComponent {

  ref: DynamicDialogRef | undefined

  @Input() item!: ItemUI
  @Input() edit: boolean = false
  @Input() remote: boolean = false
  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _dialogService: DialogService) { }

  openDialog() {
    this.ref = this._dialogService.open(TdEditorComponent, {
      header: `${this.item.name ?? 'Item'}'s Thing Description`,
      width: '1200px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        edit: this.edit,
        remote: this.remote,
        item: this.item,
      },
    })
    this.ref.onClose.pipe(untilDestroyed(this)).subscribe((updated) => {
      if (updated) {
        this.onUpdate.emit()
      }
    })
  }


}
