import { ReactNode, Key } from "react"
import { ColumnsType } from "../../types/Table"

interface TableBodyProps<T> {
  columns: ColumnsType
  data: T[]
  rowKey: string
}

function TableBody<T>({ columns, data, rowKey }: TableBodyProps<T>) {
  return (
    <>
      {data.map((item) => {
        const id = item[rowKey as keyof typeof item] as Key
        return (
          <tr key={id}>
            {columns.map((column) => {
              const { dataIndex, render, key } = column
              const value = item[dataIndex as keyof typeof item] as ReactNode
              return (
                <td key={key}>
                  {/* If `dataIndex` exists that is shown instead of `render` */}
                  {dataIndex ? value : render ? render() : null}
                </td>
              )
            })}
          </tr>
        )
      })}
    </>
  )
}

export default TableBody
