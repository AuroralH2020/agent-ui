import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject } from 'rxjs'
import { CONSTANTS } from '../constants'
import { Settings } from '@core/models/settings.model'
import { defaultSettings } from 'src/app/settings'

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _menuFolded!: BehaviorSubject<boolean>
  private _settings!: BehaviorSubject<Settings>

  constructor(private _http: HttpClient) {
    this._init()
  }

  private _init() {
    this._menuFolded = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem(CONSTANTS.MENU_FOLDED) ?? 'false'))
    this._menuFolded.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem(CONSTANTS.MENU_FOLDED, JSON.stringify(value))
    })

    var settings = JSON.parse(localStorage.getItem(CONSTANTS.SETTINGS) ?? 'null')
    if (!settings) {
      settings = defaultSettings
      localStorage.setItem(CONSTANTS.SETTINGS, JSON.stringify(settings))
    }
    this._settings = new BehaviorSubject<Settings>(settings)
    this._settings.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem(CONSTANTS.SETTINGS, JSON.stringify(value))
    })
  }

  toggleMenu() {
    this._menuFolded.next(!this.menuFolded)
  }

  updateSettings(settings: Settings) {
    this._settings.next(settings)
  }

  get menuFolded$() {
    return this._menuFolded.asObservable()
  }

  get menuFolded() {
    return this._menuFolded.value
  }

  get settings$() {
    return this._settings.asObservable()
  }

  get settings() {
    return this._settings.value
  }
}
