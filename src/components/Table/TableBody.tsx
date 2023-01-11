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
      {data.map((item) => (
        <tr key={item[rowKey as keyof typeof item] as Key}>
          {columns.map((column) => (
            <td key={column.key}>
              {/* If `dataIndex` exists that is shown instead of `render` */}
              {column.dataIndex
                ? (item[column.dataIndex as keyof typeof item] as ReactNode)
                : column.render
                ? column.render()
                : null}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default TableBody
