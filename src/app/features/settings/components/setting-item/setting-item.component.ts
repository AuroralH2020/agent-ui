import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-setting-item',
  templateUrl: './setting-item.component.html',
  styleUrls: ['./setting-item.component.scss']
})
export class SettingItemComponent {
  @Input() name!: string
  @Input() description?: string

  @ContentChild('content') content: TemplateRef<any> | undefined
}
