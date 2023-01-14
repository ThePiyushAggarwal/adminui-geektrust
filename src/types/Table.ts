import { ReactNode, Key } from "react"

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
