import { ColumnsType } from "../../types/Table"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"
import { Key, useMemo } from "react"
import Pagination, { PaginationType } from "../Pagination/Pagination"

export interface RowSelection {
  selectedRowKeys: Key[]
  onChange: (selectedRowKeys: Key[]) => void
}

export interface TableProps<T> {
  columns: ColumnsType<T>
  data: T[]
  // `rowKey` is the unique key present in the `data`
  rowKey: string
  rowSelection?: RowSelection
  pagination: PaginationType
}

function Table<T>({
  columns,
  data,
  rowKey,
  rowSelection,
  pagination,
}: TableProps<T>) {
  const toggleKey = (id: Key) =>
    // Check if `id` exists
    rowSelection?.selectedRowKeys?.some((key) => key === id)
      ? // Removing `id`
        rowSelection.onChange(
          rowSelection.selectedRowKeys.filter((key) => key !== id)
        )
      : // Adding `id`
        rowSelection?.onChange([...rowSelection?.selectedRowKeys, id])

  const paginatedData = useMemo(() => {
    const { pageSize, currentPage } = pagination

    return [...data].splice((currentPage - 1) * pageSize, pageSize)
  }, [data, pagination])

  return (
    <>
      <table>
        {/* Looping through column headers */}
        <thead>
          <TableHeader<T> columns={columns} rowSelection={rowSelection} />
        </thead>

        {/* Looping through data values for all columns */}
        <tbody>
          <TableBody<T>
            columns={columns}
            rowKey={rowKey}
            data={paginatedData}
            rowSelection={rowSelection}
            toggleKey={toggleKey}
          />
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination pagination={pagination} />
    </>
  )
}

export default Table
