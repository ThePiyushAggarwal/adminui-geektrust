import { Key } from "react"
import RowCheckbox from "./RowCheckbox"
import { TableProps } from "./Table"

interface TableRowProps<T> extends Omit<TableProps<T>, "pagination" | "data"> {
  toggleKey: (id: Key) => void
  item: T
}

function TableRow<T>({
  columns,
  rowSelection,
  toggleKey,
  item,
  rowKey,
}: TableRowProps<T>) {
  // Unique Key
  const id = item[rowKey] as Key

  // Row Selection
  const isChecked =
    rowSelection?.selectedRowKeys.some((key) => key === id) || false
  const onClickCheckbox = () => toggleKey(id)

  return (
    <tr>
      {rowSelection && (
        <RowCheckbox isChecked={isChecked} onClick={onClickCheckbox} />
      )}

      {columns.map((column) => {
        const { dataIndex, render } = column
        const value = item[dataIndex as keyof T] as string

        //  If `dataIndex` exists that is shown instead of `render`
        return (
          <td key={column.key}>{dataIndex ? value : render && render(item)}</td>
        )
      })}
    </tr>
  )
}

export default TableRow
