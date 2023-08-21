import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  @ContentChild('overlay') overlay: TemplateRef<any> | undefined

  @Input() width: number | undefined
  @Input() height: number | undefined
  @Input() top: number | undefined
  @Input() left: number | undefined

  @ViewChild('op') op!: OverlayPanel

  showOp(event: Event) {
    this.op.show(event)
  }

  hideOp(event: Event) {
    this.op.hide()
  }
}
