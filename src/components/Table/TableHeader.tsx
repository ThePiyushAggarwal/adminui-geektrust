import { ColumnsType } from "../../types/Table"
import { RowSelection } from "./Table"

interface TableHeaderProps<T> {
  columns: ColumnsType<T>
  rowSelection?: RowSelection
  toggleSelectAll: () => void
  checked: boolean
}

function TableHeader<T>({
  columns,
  rowSelection,
  toggleSelectAll,
  checked,
}: TableHeaderProps<T>) {
  return (
    <tr>
      {rowSelection && (
        <th>
          <input type="checkbox" checked={checked} onChange={toggleSelectAll} />
        </th>
      )}
      {columns.map((column) => (
        <th key={column.key}>{column.label}</th>
      ))}
    </tr>
  )
}

export default TableHeader
