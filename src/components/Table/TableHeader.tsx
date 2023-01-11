import { ColumnsType } from "../../types/Table"

interface TableHeaderProps {
  columns: ColumnsType
}

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <tr>
      {columns.map((column) => (
        <th key={column.key}>{column.label}</th>
      ))}
    </tr>
  )
}

export default TableHeader
