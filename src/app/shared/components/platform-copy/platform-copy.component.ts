import { Component, ElementRef, HostListener, Input, NgZone, OnInit } from '@angular/core';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-platform-copy',
  templateUrl: './platform-copy.component.html',
  styleUrls: ['./platform-copy.component.scss']
})
export class PlatformCopyComponent implements OnInit {

  @Input() label?: string
  @Input() textToCopy: string | null | undefined
  @Input() copyMessage?: string

  mac: boolean = false

  constructor(
    private _elementRef: ElementRef,
    private _snackBar: SnackBarService,
    private _zone: NgZone,
  ) { }

  ngOnInit(): void {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      this.mac = true
    } else {
      this.mac = false
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const res = this.textToCopy
    if (!res) return
    if ((event.ctrlKey || event.metaKey) && event.key == 'c') {
      const element = this._elementRef.nativeElement;
      if (element.offsetParent === null) return // Not visible
      if (_isBehindOtherElement(element)) return // Not Visible
      this._zone.run(() => {
        navigator.clipboard.writeText(res);
        this._snackBar.showSuccess(this.copyMessage ?? 'Copied to clipboard')
      })
    }
  }
}

function _isBehindOtherElement(element: Element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + (rect.width / 2);
  const y = rect.top + (rect.height / 2);
  const topElement = document.elementFromPoint(x, y);
  return !element.contains(topElement)
}
