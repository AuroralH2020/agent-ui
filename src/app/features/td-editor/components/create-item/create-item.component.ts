import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  td: FormControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  tdStr: string = ''

  constructor(
    _config: DynamicDialogConfig,
    private _ref: DynamicDialogRef,
    private _router: Router,
  ) {
    const td = _config.data?.td
    this.tdStr = JSON.stringify(td, null, 2)
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.td.setValue(this.tdStr)
    }, 0)
  }

  onSuccess() {
    this._ref.close()
    this._router.navigateByUrl('/home/my-node')
  }
}
