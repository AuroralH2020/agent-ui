//------- SERVER -------//

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { itemTypes, propDataTypes } from 'src/app/data'

export interface Items {
  head: Head
  results: ResultsItems
}

export interface Props {
  head: Head
  results: ResultsProps
}

export interface Head {
  vars: string[]
}

export interface ResultsItems {
  bindings: ItemServer[]
}

export interface ResultsProps {
  bindings: PropServer[]
}

export interface ItemServer {
  oid?: Data
  name?: Data
  adapterId?: Data
  type?: Data
  desc?: Data
}
export interface PropServer {
  oid?: Data
  pid?: Data
  name?: Data
  type?: Data
  datatype?: Data
  units?: Data
  desc?: Data
}

export interface Data {
  type?: string
  value?: string
  'xml:lang'?: string
}

export interface RegisterItem {
  name: string
  oid: string
  password: string
}

//------- UI -------//

export interface ItemUI {
  oid: string
  name?: string
  adapterId?: string
  type: ItemType
  desc?: string
  properties?: PropertyUI[]
}

export interface PropertyUI {
  pid: string
  type?: string
  name?: string
  desc?: string
  datatype?: PropUnitDataType
  dataunits?: string
}

export interface ItemType {
  id: string
  title: string
  icon: IconProp
  color: string
}

export interface PropUnitDataType {
  name?: string
  symbol?: string
}

export class ItemConvert {
  public static toItemsUI(items: Items, props: Props): ItemUI[] {
    let itemsUI: ItemUI[] = []
    for (const item of items.results.bindings) {
      const itemUI = ItemConvert.toItemUI(item)
      if (itemUI) {
        itemUI.properties ??= props.results.bindings
          .filter((element) => element.oid?.value === itemUI.oid)
          .map((element) => ItemConvert.toPropertyUI(element))
          .filter((element) => element !== null) as PropertyUI[]
        itemsUI.push(itemUI)
      }
    }
    return itemsUI
  }

  public static toItemUI(item: ItemServer): ItemUI | null {
    if (!item.oid) return null
    if (!item.oid.value) return null
    return {
      oid: item.oid.value,
      name: item.name?.value,
      type: ItemConvert.toItemType(item.type?.value),
      desc: item.desc?.value,
    }
  }

  public static toPropertyUI(item: PropServer): PropertyUI | null {
    if (!item.pid) return null
    if (!item.pid.value) return null
    return {
      pid: item.pid.value,
      name: item.name?.value,
      type: ItemConvert.toPropType(item.type?.value),
      desc: item.desc?.value,
      datatype: ItemConvert.toPropDataType(item.datatype?.value),
      dataunits: item.units?.value,
    }
  }

  public static toItemType(value?: string): ItemType {    
    const fallback = {...itemTypes.at(0)!}
    if (!value) {
      return fallback
    }
    const type = value.split('#').at(1)?.trim() ?? value
    fallback.title = type
    return itemTypes.find((element) => element.title === type) ?? fallback
  }

  public static toPropType(value?: string): string | undefined {
    if (!value) {
      return undefined
    }
    return value.split('#').at(1) ?? value
  }

  public static toPropDataType(value?: string): PropUnitDataType | undefined {
    if (!value) {
      return undefined
    }
    const fallback = {
      name: value,
      symbol: undefined
    }
    return propDataTypes.find((element) => element.name === value) ?? fallback
  }
}
