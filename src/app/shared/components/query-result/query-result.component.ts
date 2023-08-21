import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { QueryResultDialogComponent } from './query-result-dialog/query-result-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class QueryResultComponent implements OnInit, OnChanges {
  @Input() queryResult?: string
  @Input() loading: boolean = false
  @Input() height!: string
  @Input() noResultDesc?: string

  ref: DynamicDialogRef | undefined

  constructor(private _dialogService: DialogService) { }

  protected result: FormControl = new FormControl('', {
    updateOn: 'change',
  })

  ngOnInit(): void {
    this._set()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._set()
  }

  private async _set() {
    const result = this.queryResult
    if (result) {
      setTimeout(() => {
        this.result.setValue(result)
      }, 0)
    }
  }

  expandResult() {
    this.ref = this._dialogService.open(QueryResultDialogComponent, {
      header: 'Result',
      width: 'calc(100vw - 80px)',
      height: 'calc(100vh - 20px)',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        result: this.queryResult,
      },
    })
  }
}