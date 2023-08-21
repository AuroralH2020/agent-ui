import { Component, EventEmitter, Input, Output } from '@angular/core';
import { delay } from 'src/app/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  @Input()  visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  closing: boolean = false
  
  async close(event: Event) {
    this.closing = true
    await delay(200)
    this.visibleChange.emit(false)
    this.visible = false
    this.closing = false
  }
}
