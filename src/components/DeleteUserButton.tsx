import { Key } from "react"
import { BsTrash } from "react-icons/bs"
import { useAppDispatch } from "../store/hooks"
import { deleteUser } from "../store/userSlice"

function DeleteUserButton({ id }: { id: Key }) {
  const dispatch = useAppDispatch()

  const onDelete = () => {
    dispatch(deleteUser(id))
  }

  return (
    <button type="button" onClick={onDelete} className="text-red-500 text-xl">
      <BsTrash />
    </button>
  )
}

export default DeleteUserButton
