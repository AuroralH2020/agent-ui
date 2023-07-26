import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { DynamicDialogConfig } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-query-result-dialog',
  templateUrl: './query-result-dialog.component.html',
  styleUrls: ['./query-result-dialog.component.scss'],
})
export class QueryResultDialogComponent implements OnInit {
  result: FormControl = new FormControl('', {
    validators: [Validators.required],
  })

  constructor(private _config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this._init()
  }

  private async _init() {
    const result = this._config.data.result
    setTimeout(() => {
      this.result.setValue(result)
    }, 0)
  }
}
