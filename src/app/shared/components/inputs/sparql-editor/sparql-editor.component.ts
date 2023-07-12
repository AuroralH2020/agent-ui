import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import * as ace from 'ace-builds'

@Component({
  selector: 'app-sparql-editor',
  templateUrl: './sparql-editor.component.html',
  styleUrls: ['./sparql-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SparqlEditorComponent),
    },
  ],
})
export class SparqlEditorComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>

  @Input() style?: string;

  aceEditor!: ace.Ace.Editor

  private _value: string = ''

  protected focused: boolean = false

  constructor() {
    return
  }

  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px')
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')
    this.aceEditor = ace.edit(this.editor.nativeElement)
    this.aceEditor.session.setValue(this.value)
    // this.aceEditor.setTheme('ace/theme/kuroir')
    this.aceEditor.container.style.borderRadius = '8px'
    this.aceEditor.renderer.setShowPrintMargin(false);
    this.aceEditor.session.setMode('ace/mode/sparql')
    this.aceEditor.on('change', () => {
      this.value = this.aceEditor.getValue()
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

  ngOnInit(): void {}
}
