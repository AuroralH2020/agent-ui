import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject } from 'rxjs'
import { CONSTANTS } from '../constants'

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _menuFolded!: BehaviorSubject<boolean>

  constructor(private _http: HttpClient) {
    this._init()
  }

  private _init() {
    this._menuFolded = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem(CONSTANTS.MENU_FOLDED) ?? 'false'))
    this._menuFolded.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem(CONSTANTS.MENU_FOLDED, JSON.stringify(value))
    })
  }

  toggleMenu() {
    this._menuFolded.next(!this.menuFolded)
  }

  get menuFolded$() {
    return this._menuFolded.asObservable()
  }

  get menuFolded() {
    return this._menuFolded.value
  }
}
