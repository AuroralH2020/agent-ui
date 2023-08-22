import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { delay } from 'src/app/utils';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnChanges {

  @ContentChild('header') header: TemplateRef<any> | undefined
  
  @Input()  visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  closing: boolean = false

  isOpen: boolean = false

  constructor() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    const visible = changes.visible.currentValue
    if ((this.isOpen && !visible) || (!this.isOpen && visible)) {
      this.isOpen = visible
      const appWrapper = document.getElementById('app-wrapper')
      if (appWrapper?.style) {
        const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
        appWrapper.style.overflow = visible ? 'hidden': ''
        appWrapper.style.marginRight = visible ? scrollbarWidth: ''
      }
    }
  }
  
  async close(event: Event) {
    this.closing = true
    await delay(200)
    this.visibleChange.emit(false)
    this.visible = false
    this.closing = false
  }
}
