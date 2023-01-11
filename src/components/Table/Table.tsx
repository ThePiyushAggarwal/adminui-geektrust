import { ColumnsType } from "../../types/Table"
import TableBody from "./TableBody"
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
          <TableBody columns={columns} rowKey={rowKey} data={data} />
        </thead>
      </table>
    </>
  )
}

export default Table
