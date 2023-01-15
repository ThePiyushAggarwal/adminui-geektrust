import { RowCheckboxProps } from "./Table.types"

function RowCheckbox({ onClick, isChecked }: RowCheckboxProps) {
  return (
    <td>
      <input type="checkbox" checked={isChecked} readOnly onClick={onClick} />
    </td>
  )
}

export default RowCheckbox
