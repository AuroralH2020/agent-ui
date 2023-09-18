import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingItemComponent } from './components/setting-item/setting-item.component';
import { SharedModule } from '@shared/shared.module';
import { MyOrgDataConnectorComponent } from './my-org-data-connector/my-org-data-connector.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingItemComponent,
    MyOrgDataConnectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {
}
