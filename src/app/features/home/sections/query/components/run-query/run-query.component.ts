import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import * as ace from 'ace-builds'

@Component({
  selector: 'app-run-query',
  templateUrl: './run-query.component.html',
  styleUrls: ['./run-query.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RunQueryComponent implements OnInit, AfterViewInit {
  @ViewChild('result') private result!: ElementRef<HTMLElement>

  aceEditor!: ace.Ace.Editor

  @Input() runQuery!: (query: string) => Promise<any>
  @Input() title!: string

  loading: boolean = false

  queryResult: any

  constructor(private _snackBar: SnackBarService) {}

  protected form!: FormGroup
  protected query: FormControl = new FormControl('', {
    updateOn: 'change',
  })

  ngAfterViewInit(): void {
    ace.config.set('fontSize', '12px')
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')
    this.aceEditor = ace.edit(this.result.nativeElement)
    // this.aceEditor.setTheme('ace/theme/kuroir')
    this.aceEditor.container.style.borderRadius = '8px'
    this.aceEditor.setReadOnly(true)
    this.aceEditor.renderer.setShowGutter(false)
    this.aceEditor.renderer.setShowPrintMargin(false)
    this.aceEditor.session.setMode('ace/mode/json')
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: this.query,
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
      this.aceEditor.session.setValue(JSON.stringify(this.queryResult, null, 2))
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
