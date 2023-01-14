import { ReactNode, Key } from "react"
import RowCheckbox from "./RowCheckbox"
import { TableProps } from "./Table"

interface TableBodyProps<T> extends Omit<TableProps<T>, "pagination"> {
  toggleKey: (id: Key) => void
}

function TableBody<T>({
  columns,
  data,
  rowKey,
  rowSelection,
  toggleKey,
}: TableBodyProps<T>) {
  return data.map((item) => {
    // Unique Key
    const id = item[rowKey as keyof typeof item] as Key

    // Row Selection
    const isChecked =
      rowSelection?.selectedRowKeys.some((key) => key === id) || false
    const onClickCheckbox = () => toggleKey(id)

    return (
      <tr key={id}>
        {rowSelection && (
          <RowCheckbox isChecked={isChecked} onClick={onClickCheckbox} />
        )}

        {columns.map((column) => {
          const { dataIndex, render, key } = column
          const value = item[dataIndex as keyof typeof item] as ReactNode

          //  If `dataIndex` exists that is shown instead of `render`
          return <td key={key}>{dataIndex ? value : render && render(item)}</td>
        })}
      </tr>
    )
  })
}

export default TableBody
