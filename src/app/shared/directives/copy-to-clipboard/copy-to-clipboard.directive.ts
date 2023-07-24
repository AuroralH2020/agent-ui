import { Directive, HostListener, Input } from '@angular/core'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  @Input() textToCopy?: string
  @Input() copyMessage?: string

  constructor(private _snackbar: SnackBarService) {}

  @HostListener('click', ['$event'])
  copyToClipboard(event: Event) {
    event.stopPropagation()
    if (this.textToCopy) {
      navigator.clipboard.writeText(this.textToCopy)
      this._snackbar.showMessage(this.copyMessage ?? 'Copied to clipboard')
    }
  }
}
