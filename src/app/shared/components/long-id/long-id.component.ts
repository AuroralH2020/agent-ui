import { Component, Input } from '@angular/core';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-long-id',
  templateUrl: './long-id.component.html',
  styleUrls: ['./long-id.component.scss']
})
export class LongIdComponent {
  @Input() id!: string
  @Input() copyMessage?: string
  @Input() width?: number

  hidden: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(event: Event) {
    event.stopPropagation()
    this.hidden = !this.hidden
  }
}
