import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyUI } from '@core/models/item.model';

@Component({
  selector: 'app-props-table',
  templateUrl: './props-table.component.html',
  styleUrls: ['./props-table.component.scss']
})
export class PropsTableComponent {

  @ContentChild('actions') actions: TemplateRef<any> | undefined

  @Input() props: PropertyUI[] = []

}
