import { Key, useMemo } from "react"
import { ColumnsType } from "../../types/Table"
import TableRow from "./TableRow"
import TableHeader from "./TableHeader"
import Pagination, { PaginationType } from "../Pagination/Pagination"

export interface RowSelection {
  selectedRowKeys: Key[]
  onChange: (selectedRowKeys: Key[]) => void
}

export interface TableProps<T> {
  columns: ColumnsType<T>
  data: T[]
  // `rowKey` is the unique key present in the `data`
  rowKey: keyof T
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
  /** Makes sure to add/remove the passed in key
   * Called when individual row checkbox is clicked
   */
  const toggleKey = (id: Key) => {
    if (rowSelection) {
      // Check if `id` exists
      if (rowSelection.selectedRowKeys.some((key) => key === id)) {
        // Removing `id`
        rowSelection.onChange(
          rowSelection.selectedRowKeys.filter((key) => key !== id)
        )
      } else {
        // Adding `id`
        rowSelection.onChange([...rowSelection.selectedRowKeys, id])
      }
    }
  }

  const paginatedData = useMemo(() => {
    const { pageSize, currentPage } = pagination

    return [...data].splice((currentPage - 1) * pageSize, pageSize)
  }, [data, pagination])

  /** All keys on the paginated page */
  const allKeysOnPage = useMemo(
    () => paginatedData.map((data) => data[rowKey]) as Key[],
    [paginatedData]
  )

  /** Makes sure to select/deselect all when called
   * Called when the checkbox in header is clicked
   */
  const toggleSelectAll = () => {
    if (rowSelection) {
      /** All that are selected on this page */
      const allSelectedOnThisPage = rowSelection.selectedRowKeys.filter((key) =>
        allKeysOnPage.includes(key)
      )

      if (allSelectedOnThisPage.length === allKeysOnPage.length) {
        /** Array of keys left after removing all visible */
        const pendingKeys = rowSelection.selectedRowKeys.filter(
          (key) => !allKeysOnPage.includes(key)
        )
        rowSelection.onChange(pendingKeys)
      } else {
        /** `Set` makes sure that there are no duplicate entries */
        const selectAllOnThisPage = [
          ...new Set([...allKeysOnPage, ...rowSelection.selectedRowKeys]),
        ]
        rowSelection.onChange(selectAllOnThisPage)
      }
    }
  }

  /** State for the Checkbox in Table header */
  const allCheckedOnPage: boolean = useMemo(() => {
    if (rowSelection) {
      const allSelectedOnThisPage = rowSelection.selectedRowKeys.filter((key) =>
        allKeysOnPage.includes(key)
      )

      return allSelectedOnThisPage.length === allKeysOnPage.length
    }
    return false
  }, [rowSelection?.selectedRowKeys, paginatedData])

  return (
    <>
      <table>
        {/* Looping through column headers */}
        <thead>
          <TableHeader<T>
            columns={columns}
            rowSelection={rowSelection}
            toggleSelectAll={toggleSelectAll}
            checked={allCheckedOnPage}
          />
        </thead>

        {/* Looping through data values for all columns */}
        <tbody>
          {paginatedData.map((item) => (
            <TableRow<T>
              key={item[rowKey] as Key}
              columns={columns}
              rowSelection={rowSelection}
              toggleKey={toggleKey}
              item={item}
              rowKey={rowKey}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination pagination={pagination} />
    </>
  )
}

export default Table
