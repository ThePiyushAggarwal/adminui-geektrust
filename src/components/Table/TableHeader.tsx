import { ColumnsType } from "../../types/Table"

interface TableHeaderProps {
  columns: ColumnsType
}

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <>
      {columns.map((column) => (
        <th key={column.key}>{column.label}</th>
      ))}
    </>
  )
}

export default TableHeader
