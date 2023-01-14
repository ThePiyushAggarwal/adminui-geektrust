import { ColumnsType } from "../../types/Table"
import { RowSelection } from "./Table"

interface TableHeaderProps<T> {
  columns: ColumnsType<T>
  rowSelection?: RowSelection
}

function TableHeader<T>({ columns, rowSelection }: TableHeaderProps<T>) {
  return (
    <tr>
      {rowSelection && <th></th>}
      {columns.map((column) => (
        <th key={column.key}>{column.label}</th>
      ))}
    </tr>
  )
}

export default TableHeader
