import { ReactNode, Key } from "react"
import { ColumnsType } from "../../types/Table"
import TableHeader from "./TableHeader"

interface TableProps<T> {
  columns: ColumnsType
  data: T[]
  /** `rowKey` is the unique key present in the `data` */
  rowKey: string
}

function Table<T>({ columns, data, rowKey }: TableProps<T>) {
  return (
    <>
      <table>
        <thead>
          {/* Looping through column headers */}
          <TableHeader columns={columns} />

          {/* Looping through data values for all columns */}
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
        </thead>
      </table>
    </>
  )
}

export default Table
