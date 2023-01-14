import { ColumnsType } from "../../types/Table"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"
import { Key } from "react"

export interface RowSelection {
  selectedRowKeys: Key[]
  onChange: (selectedRowKeys: Key[]) => void
}

export interface TableProps<T> {
  columns: ColumnsType<T>
  data: T[]
  /** `rowKey` is the unique key present in the `data` */
  rowKey: string
  rowSelection?: RowSelection
}

function Table<T>({ columns, data, rowKey, rowSelection }: TableProps<T>) {
  const toggleKey = (id: Key) =>
    /** Check if `id` exists */
    rowSelection?.selectedRowKeys?.some((key) => key === id)
      ? /** Removing `id` */
        rowSelection.onChange(
          rowSelection.selectedRowKeys.filter((key) => key !== id)
        )
      : /** Adding `id` */
        rowSelection?.onChange([...rowSelection?.selectedRowKeys, id])

  return (
    <>
      <table>
        <thead>
          {/* Looping through column headers */}
          <TableHeader<T> columns={columns} rowSelection={rowSelection} />

          {/* Looping through data values for all columns */}
          <TableBody<T>
            columns={columns}
            rowKey={rowKey}
            data={data}
            rowSelection={rowSelection}
            toggleKey={toggleKey}
          />
        </thead>
      </table>
    </>
  )
}

export default Table
