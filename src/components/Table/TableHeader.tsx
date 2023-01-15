import { TableHeaderProps } from "./Table.types"

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
