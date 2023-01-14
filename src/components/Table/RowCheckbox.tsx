interface Props {
  onClick: () => void
  isChecked: boolean
}

function RowCheckbox({ onClick, isChecked }: Props) {
  return (
    <td>
      <input type="checkbox" checked={isChecked} readOnly onClick={onClick} />
    </td>
  )
}

export default RowCheckbox
