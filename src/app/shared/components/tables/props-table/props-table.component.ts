import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyUI } from '@core/models/item.model';
import { inflect } from 'src/app/utils';

@Component({
  selector: 'app-props-table',
  templateUrl: './props-table.component.html',
  styleUrls: ['./props-table.component.scss']
})
export class PropsTableComponent {

  @ContentChild('propActions') propActions: TemplateRef<any> | undefined

  @Input() props?: PropertyUI[]

  get propsCount(): string {
    const count = this.props?.length ?? 0
    return inflect(count, '0 properties', '1 property', `${count} properties`)
  }
}
