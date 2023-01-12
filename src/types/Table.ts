import { ReactNode, Key } from "react"

export type ColumnsType = {
  key: Key
  label: string
  dataIndex?: string
  render?: () => ReactNode
}[]
