import { ColumnsType } from "../../types/Table"
import { RowSelection } from "./Table"

interface TableHeaderProps {
  columns: ColumnsType
  rowSelection?: RowSelection
}

function TableHeader({ columns, rowSelection }: TableHeaderProps) {
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
