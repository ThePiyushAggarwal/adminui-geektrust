import { ReactNode, Key } from "react"
import { PaginationType } from "../Pagination/Pagination.types"

export type ColumnsType<T> = {
  key: Key
  label: string
  dataIndex?: keyof T
  /** This method can be used to modified data.
   * It sends back the object of the type mentioned using `T`.
   * Second parameter uses the editing functions in the row.
   */
  render?: (data: T) => ReactNode
}[]

export interface TableProps<T> {
  columns: ColumnsType<T>
  data: T[]
  // `rowKey` is the unique key present in the `data`
  rowKey: keyof T
  rowSelection?: RowSelection
  pagination: PaginationType
}

export interface TableHeaderProps<T> {
  columns: ColumnsType<T>
  rowSelection?: RowSelection
  toggleSelectAll: () => void
  checked: boolean
}

export interface RowCheckboxProps {
  onClick: () => void
  isChecked: boolean
}

export interface RowSelection {
  selectedRowKeys: Key[]
  onChange: (selectedRowKeys: Key[]) => void
}
