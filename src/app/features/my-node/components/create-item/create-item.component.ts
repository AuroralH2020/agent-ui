import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { DynamicDialogRef } from 'primeng/dynamicdialog'

@UntilDestroy()
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  disabledFile: boolean = true
  disabledCode: boolean = true

  fileControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  codeControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  constructor(
    private _dialogRef: DynamicDialogRef,
  ) {
  }

  ngOnInit(): void {
    this.fileControl.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      const valid = this.fileControl.valid
      if (this.disabledFile && valid) {
        this.disabledFile = false
      } else if (!this.disabledFile && !valid) {
        this.disabledFile = true
      }
    })
    this.codeControl.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      const valid = this.codeControl.valid
      if (this.disabledCode && valid) {
        this.disabledCode = false
      } else if (!this.disabledCode && !valid) {
        this.disabledCode = true
      }
    })
  }

  onSuccess() {
    this._dialogRef.close()
  }
}
