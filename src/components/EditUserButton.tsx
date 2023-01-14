import { BsPencilSquare } from "react-icons/bs"
import { useAppDispatch } from "../store/hooks"
import { updateUserDetails } from "../store/userSlice"
import { User } from "../types/Users"

interface Props {
  user: User
}

function EditUserButton({ user }: Props) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(updateUserDetails(user))
  }

  return <BsPencilSquare onClick={onClick} />
}

export default EditUserButton
