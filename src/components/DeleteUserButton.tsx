import { Key } from "react"
import { BsTrash } from "react-icons/bs"
import { useAppDispatch } from "../store/hooks"
import { deleteUser } from "../store/userSlice"

function DeleteUserButton({ id }: { id: Key }) {
  const dispatch = useAppDispatch()

  return <BsTrash onClick={() => dispatch(deleteUser(id))} />
}

export default DeleteUserButton
