import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ItemUI } from '@core/models/item.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ShowTdDialogComponent } from './show-td-dialog/show-td-dialog.component';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

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
  @Input() showCopy: boolean = true
  @Input() allowEditTogle: boolean = true
  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _dialogService: DialogService, private _snackBar: SnackBarService) { }

  openDialog() {
    this.ref = this._dialogService.open(ShowTdDialogComponent, {
      header: `${this.item.name ?? 'Item'}'s Thing Description`,
      width: 'calc(100vw - 80px)',
      height: 'calc(100vh - 80px)',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        edit: this.edit,
        remote: this.remote,
        item: this.item,
        showCopy: this.showCopy,
        allowEditTogle: this.allowEditTogle,
      },
    })
    this.ref.onClose.pipe(untilDestroyed(this)).subscribe((updated) => {
      if (updated) {
        this.onUpdate.emit()
        this._snackBar.showSuccess('TD updated')
      }
    })
  }


}
