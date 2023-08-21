import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'

@Component({
  selector: 'app-run-query',
  templateUrl: './run-query.component.html',
  styleUrls: ['./run-query.component.scss'],
})
export class RunQueryComponent implements OnInit {
  @Input() runQuery!: (query: string) => Promise<any>
  @Input() title!: string

  loading: boolean = false

  queryResult: any

  constructor(private _snackBar: SnackBarService) {}

  protected form!: FormGroup
  protected query: FormControl = new FormControl('', {
    updateOn: 'change',
  })
  protected result: FormControl = new FormControl('', {
    updateOn: 'change',
  })

  ngOnInit(): void {
    this.form = new FormGroup({
      query: this.query,
      result: this.result,
    })
  }

  ngOnDestroy() {}

  async executeQuery() {
    if (this.invalidQuery) {
      this._snackBar.showError('Invalid query')
      return
    }
    const query = this.form.value.query
    try {
      this.loading = true
      this.queryResult = await this.runQuery(query)
      this.result.setValue(JSON.stringify(this.queryResult, null, 2))
    } catch (e) {
      this.queryResult = undefined
      this._snackBar.showError((e as Error).message)
    } finally {
      this.loading = false
    }
  }

  get invalidQuery(): boolean {
    const value = this.form.value.query
    if (!this.form.valid) {
      return true
    }
    if (!value || value.length === 0) {
      return true
    }
    return false
  }
}
