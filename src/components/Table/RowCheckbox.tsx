import Checkbox from "../Form/Checkbox"
import { RowCheckboxProps } from "./Table.types"

function RowCheckbox({ onClick, isChecked }: RowCheckboxProps) {
  return (
    <td className="p-2">
      <Checkbox checked={isChecked} readOnly onClick={onClick} />
    </td>
  )
}

export default RowCheckbox
