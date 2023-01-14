import { ReactNode, Key } from "react"

export type ColumnsType<T> = {
  key: Key
  label: string
  dataIndex?: keyof T
  render?: (x: T) => ReactNode
}[]
