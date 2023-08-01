import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ItemConvert, ItemUI, Items, RegisterItem } from '@core/models/item.model'
import { BehaviorSubject, firstValueFrom, take } from 'rxjs'
import { queryItems, queryProps } from 'src/app/queries'

const _itemsRemoteQueryUrl = '/api/discovery/remote/semantic'
const _itemsLocalQueryUrl = '/api/discovery/local/semantic'

const _itemsReadPropertyUrl = '/api/properties'

const _itemsRegister = '/api/registration'
const _itemsRemove = '/api/registration/remove'
const _itemsUpdate = '/api/registration'

const _itemLocalTd = '/api/discovery/local/td'
const _itemRemoteTd = '/api/discovery/remote/td'

const _itemAgid = '/api/discovery/remote/agid'

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private _http: HttpClient) {}

  private _myItems: BehaviorSubject<ItemUI[]> = new BehaviorSubject<ItemUI[]>([])
  private _myOrgItems: BehaviorSubject<ItemUI[]> = new BehaviorSubject<ItemUI[]>([])

  private _newItems: string[] = []

  public async initItems(orgAgids: string[]) {
    await this._initMyItems()
    try {
      await Promise.all([await this._initMyItems(), await this._initMyOrgItems(orgAgids)])
    } catch (error: any) {
      await Promise.all([await this._initMyItems(), await this._initMyOrgItems(orgAgids)])
    }
  }

  private async _initMyItems(): Promise<void> {
    const itemsUI = await this.getMyItems()
    this.updateMyItems(itemsUI)
  }

  private async _initMyOrgItems(orgAgids: string[]): Promise<void> {
    const itemsUI = await this.getRemoteItems(orgAgids)
    this.updateMyOrgItems(itemsUI)
  }

  async getMyItems(): Promise<ItemUI[]> {
    const itemsServer = await firstValueFrom(
      this._http
        .post<Items>(_itemsLocalQueryUrl, queryItems, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
    const propsServer = await firstValueFrom(
      this._http
        .post<Items>(_itemsLocalQueryUrl, queryProps, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
    return ItemConvert.toItemsUI(itemsServer, propsServer)
  }

  async getRemoteItems(agids: string[]): Promise<ItemUI[]> {
    let params = new HttpParams()
    params = params.append('agids', agids.join(','))
    const itemsServer = await firstValueFrom(
      this._http
        .post<Items>(_itemsRemoteQueryUrl, queryItems, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
    const propsServer = await firstValueFrom(
      this._http
        .post<Items>(_itemsRemoteQueryUrl, queryProps, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
    return ItemConvert.toItemsUI(itemsServer, propsServer)
  }

  async getDataFromProperty(
    oid: string,
    remoteOid: string,
    pid: string,
    params?: Record<string, string>
  ): Promise<any> {
    return await firstValueFrom(
      this._http
        .get<any>(_itemsReadPropertyUrl + `/${oid}/${remoteOid}/${pid}`, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
  }

  async getLocalTD(oid: string): Promise<Object> {
    return await firstValueFrom(
      this._http
        .get<Object>(_itemLocalTd + `/${oid}`, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
        .pipe(take(1))
    )
  }

  async getRemoteTD(agid: string, oids: string[]): Promise<Object> {
    let params = new HttpParams()
    params = params.append('oids', oids.join(','))
    return await firstValueFrom(
      this._http
        .get<Object>(_itemRemoteTd + `/${agid}`, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
        .pipe(take(1))
    )
  }

  async getItemsAgid(oid: string): Promise<string> {
    return await firstValueFrom(
      this._http
        .get<string>(_itemAgid + `/${oid}`, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
        .pipe(take(1))
    )
  }

  async updateProperty(
    oid: string,
    remoteOid: string,
    pid: string,
    params?: Record<string, string>,
    body?: any
  ): Promise<any> {
    return await firstValueFrom(
      this._http
        .put<any>(_itemsReadPropertyUrl + `/${oid}/${remoteOid}/${pid}`, body, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
        .pipe(take(1))
    )
  }

  async registerNewItem(td: object) {
    const items = await firstValueFrom(
      this._http
        .post<RegisterItem[]>(
          _itemsRegister,
          {
            td,
          },
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
            },
          }
        )
        .pipe(take(1))
    )
    for (const item of items) {
      this._newItems.push(item.oid)
    }
    await this._initMyItems()
  }

  async removeItems(oids: string[]) {
    await firstValueFrom(
      this._http
        .post(
          _itemsRemove,
          {
            oids,
          },
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
            },
          }
        )
        .pipe(take(1))
    )
    for (const oid of oids) {
      const index = this._newItems.indexOf(oid)
      this._newItems = this._newItems.splice(index, 1)
    }
    await this._initMyItems()
  }

  async updateItem(td: object) {
    await firstValueFrom(
      this._http
        .put(
          _itemsUpdate,
          { td },
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
            },
          }
        )
        .pipe(take(1))
    )
    await this._initMyItems()
  }

  isNew(item: ItemUI) {
    return this._newItems.includes(item.oid)
  }

  updateMyItems(items: ItemUI[]) {
    this._myItems.next(items)
  }

  updateMyOrgItems(items: ItemUI[]) {
    this._myOrgItems.next(items)
  }

  get myItems$() {
    return this._myItems.asObservable()
  }

  get myOrgItems$() {
    return this._myOrgItems.asObservable()
  }

  get myItems() {
    return this._myItems.value
  }

  get myOrgItems() {
    return this._myOrgItems.value
  }
}
