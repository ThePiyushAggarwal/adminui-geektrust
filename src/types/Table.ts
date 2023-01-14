import { ReactNode, Key } from "react"

export type ColumnsType<T> = {
  key: Key
  label: string
  dataIndex?: string
  render?: (x: T) => ReactNode
  /** Handles if the table cell can be clicked to select
   * a row. Only for the table cell using `render` method.
   * Helpful when having some button in every row.
   */
  clickToSelect?: boolean
}[]
