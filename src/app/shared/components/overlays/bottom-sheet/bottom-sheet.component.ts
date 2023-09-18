import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { OverlayComponent } from '../overlay.component';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  @ContentChild('header') header: TemplateRef<any> | undefined
  
  @Input()  visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild('ol') ol!: OverlayComponent

  closing: boolean = false

  onVisibleChange(value: boolean) {
    this.visible = value
    this.visibleChange.emit(this.visible)
  }

  onClosingChange(value: boolean) {
    this.closing = value
  }

  close(event: Event) {
    this.ol.close(event)
  }
}
