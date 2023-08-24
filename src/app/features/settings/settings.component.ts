import { Component, OnInit } from '@angular/core';
import { ItemUI } from '@core/models/item.model';
import { Settings } from '@core/models/settings.model';
import { AdminService } from '@core/services/admin/admin.service';
import { ItemsService } from '@core/services/item/item.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { deepEqual } from 'src/app/utils';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  oldSettings!: Settings
  newSettings!: Settings

  settingsChanged: boolean = false

  constructor(private _adminService: AdminService, private _snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.oldSettings = { ...this.settings }
    this.newSettings = { ...this.oldSettings }
    this.settings$.pipe(untilDestroyed(this)).subscribe(newSettings => {
      this.oldSettings = { ...newSettings }
    })
  }

  saveSettings() {
    this._adminService.updateSettings(this.newSettings)
    this.settingsChanged = false
    this._snackBar.showSuccess('Settings updated')
  }

  discardChanges() {
    this.newSettings = { ...this.oldSettings }
    this.settingsChanged = false
  }

  checkIfSettingsChanged() {
    this.settingsChanged = !deepEqual(this.oldSettings, this.newSettings)
  }

  get settings$() {
    return this._adminService.settings$
  }

  get settings() {
    return this._adminService.settings
  }
}
