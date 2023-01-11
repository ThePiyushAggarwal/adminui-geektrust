import { ReactNode } from "react"

export type ColumnsType = {
  key: string
  label: string
  dataIndex?: string
  render?: () => ReactNode
}[]
