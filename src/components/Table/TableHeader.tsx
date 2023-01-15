import Checkbox from "../Form/Checkbox"
import { TableHeaderProps } from "./Table.types"

function TableHeader<T>({
  columns,
  rowSelection,
  toggleSelectAll,
  checked,
}: TableHeaderProps<T>) {
  return (
    <tr className="bg-white/80 text-left md:text-center">
      {rowSelection && (
        <th className="p-2">
          <Checkbox checked={checked} onChange={toggleSelectAll} />
        </th>
      )}
      {columns.map((column) => (
        <th key={column.key} className="p-2">
          {column.label}
        </th>
      ))}
    </tr>
  )
}

export default TableHeader
