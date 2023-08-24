import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { delay } from 'src/app/utils';
import { OverlayComponent } from '../overlay.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
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
