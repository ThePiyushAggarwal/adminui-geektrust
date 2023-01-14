import { ReactNode, Key } from "react"
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
  return (
    <>
      {data.map((item) => {
        const id = item[rowKey as keyof typeof item] as Key
        const isChecked = rowSelection?.selectedRowKeys.some(
          (key) => key === id
        )
        const onChange = () => toggleKey(id)
        return (
          <tr key={id}>
            {rowSelection && (
              <td>
                <input
                  type="checkbox"
                  checked={isChecked}
                  readOnly
                  onClick={onChange}
                />
              </td>
            )}

            {columns.map((column) => {
              const { dataIndex, render, key } = column
              const value = item[dataIndex as keyof typeof item] as ReactNode

              //  If `dataIndex` exists that is shown instead of `render`
              return (
                <td key={key}>{dataIndex ? value : render && render(item)}</td>
              )
            })}
          </tr>
        )
      })}
    </>
  )
}

export default TableBody
