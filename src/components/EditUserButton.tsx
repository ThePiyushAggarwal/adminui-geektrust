import { BsPencilSquare } from "react-icons/bs"
import { useAppDispatch } from "../store/hooks"
import { updateUserDetails } from "../store/userSlice"
import { User } from "../types/Users"

function EditUserButton({ user }: { user: User }) {
  const dispatch = useAppDispatch()

  return <BsPencilSquare onClick={() => dispatch(updateUserDetails(user))} />
}

export default EditUserButton
