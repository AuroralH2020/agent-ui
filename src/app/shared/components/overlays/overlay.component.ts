import { Component, ContentChild, EventEmitter, HostListener, Input, NgZone, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { delay } from 'src/app/utils';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  @ContentChild('content') content: TemplateRef<any> | undefined

  @Input() visible: boolean = false;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() closingChange = new EventEmitter<boolean>();

  closing: boolean = false;
  isOpen: boolean = false

  constructor(private _zone: NgZone) {

  }

  ngOnChanges(changes: SimpleChanges) {
    const visible = changes.visible.currentValue
    if ((this.isOpen && !visible) || (!this.isOpen && visible)) {
      this.isOpen = visible
      const appWrapper = document.getElementById('app-wrapper')
      if (appWrapper?.style) {
        const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
        appWrapper.style.overflow = visible ? 'hidden' : ''
        appWrapper.style.marginRight = visible ? scrollbarWidth : ''
      }
    }
  }

  async close(event: Event) {
    this.closing = true
    this.closingChange.emit(this.closing)
    await delay(200)
    this.visible = false
    this.closing = false
    this.visibleChange.emit(this.visible)
    this.closingChange.emit(this.closing)
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this._zone.run(() => {
      this.close(event)
    })
  }

}
