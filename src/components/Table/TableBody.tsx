import { ReactNode, Key } from "react"
import { TableProps } from "./Table"

interface TableBodyProps<T> extends TableProps<T> {
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
          <tr key={id} onClick={onChange}>
            {rowSelection && (
              <td>
                <input type="checkbox" checked={isChecked} readOnly />
              </td>
            )}
            {columns.map((column) => {
              const { dataIndex, render, key, clickToSelect } = column
              const value = item[dataIndex as keyof typeof item] as ReactNode
              // Table Row is clickable.
              // This is handled using `onClick` function and `clickToSelect`
              const onClick = (e: React.MouseEvent) =>
                !clickToSelect && e.stopPropagation()
              //  If `dataIndex` exists that is shown instead of `render`
              return dataIndex ? (
                <td key={key}>{value}</td>
              ) : (
                render && (
                  <td key={key} onClick={onClick}>
                    {render()}
                  </td>
                )
              )
            })}
          </tr>
        )
      })}
    </>
  )
}

export default TableBody
