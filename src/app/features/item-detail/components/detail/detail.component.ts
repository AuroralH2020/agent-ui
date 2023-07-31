import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { Location } from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, AfterViewInit {
  @Input() item!: ItemUI
  @Input() back: string = 'Items'
  @Input() organisation?: string
  @ContentChild('itemActions') itemActions: TemplateRef<any> | undefined
  @ContentChild('propsTable') propsTable: TemplateRef<any> | undefined

  @ViewChild('info') info!: ElementRef

  infoFixed: boolean = false
  dynamicWidth: number = 0

  constructor(private _location: Location, private _zone: NgZone) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dynamicWidth = this.info.nativeElement.offsetWidth
    }, 0)
  }

  onBack() {
    this._location.back()
  }

  @HostListener('window:scroll')
  onScroll(e: Event): void {
    const scrollY = window.scrollY
    if (scrollY > 52) {
      if (!this.infoFixed) {
        this._zone.run(() => {
          this.infoFixed = true
        })
      }
    } else {
      if (this.infoFixed) {
        this._zone.run(() => {
          this.infoFixed = false
        })
      }
    }
  }

  @HostListener('window:resize')
  onResize(e: Event): void {
    const newWidth = this.info.nativeElement.offsetWidth
    if (this.dynamicWidth !== newWidth) {
      this._zone.run(() => {
        this.dynamicWidth = newWidth
      })
    }
  }
}
