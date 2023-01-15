import { TableHeaderProps } from "./Table.types"

function TableHeader<T>({
  columns,
  rowSelection,
  toggleSelectAll,
  checked,
}: TableHeaderProps<T>) {
  return (
    <tr className="bg-white/80">
      {rowSelection && (
        <th className="py-2">
          <input type="checkbox" checked={checked} onChange={toggleSelectAll} />
        </th>
      )}
      {columns.map((column) => (
        <th key={column.key} className="py-2">
          {column.label}
        </th>
      ))}
    </tr>
  )
}

export default TableHeader
