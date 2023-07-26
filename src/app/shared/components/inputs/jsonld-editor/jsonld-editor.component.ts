import { AfterViewInit, Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import * as ace from 'ace-builds'

@Component({
  selector: 'app-jsonld-editor',
  templateUrl: './jsonld-editor.component.html',
  styleUrls: ['./jsonld-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => JsonldEditorComponent),
    },
  ],
})
export class JsonldEditorComponent implements AfterViewInit {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>

  @Input() fontSize: number = 14
  @Input() readOnly: boolean = false
  @Input() showGutter: boolean = true

  private _value: string = ''

  protected focused: boolean = false

  aceEditor!: ace.Ace.Editor

  ngAfterViewInit(): void {
    ace.config.set('fontSize', `${this.fontSize}px`)
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')
    this.aceEditor = ace.edit(this.editor.nativeElement)
    this.aceEditor.container.style.borderRadius = '8px'
    this.aceEditor.setReadOnly(this.readOnly)
    this.aceEditor.renderer.setShowGutter(this.showGutter)
    this.aceEditor.renderer.setShowPrintMargin(false)
    this.aceEditor.session.setMode('ace/mode/json')
    this._listenForChange()
  }

  _ignore = false

  private _listenForChange() {
    this.aceEditor.on('change', () => {
      if (this._ignore) {
        return
      }
      const value = this.aceEditor.getValue()
      this._value = value
      this.onChange(value)
    })
    this.aceEditor.on('focus', () => {
      this.focused = true
    })
    this.aceEditor.on('blur', () => {
      this.focused = false
    })
  }

  set value(value: string) {
    this._value = value
    this.onChange(value)
    if (this.aceEditor) {
      this._ignore = true
      this.aceEditor.setValue(value, -1)
      this._ignore = false
    }
  }

  get value(): string {
    return this._value
  }

  onChange = (value: string) => {}
  onTouched = () => {}

  writeValue(value: string) {
    this.value = value
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }
}
