import { Key } from "react"
import { useAppDispatch } from "../store/hooks"
import { deleteManyUsers } from "../store/userSlice"

interface Props {
  userIds: Key[]
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<Key[]>>
}

function DeleteManyUsersButton({ userIds, setSelectedRowKeys }: Props) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(deleteManyUsers(userIds))
    setSelectedRowKeys([])
  }

  return (
    <div onClick={onClick} className="text-red-500 text-3xl">
      Delete Selected
    </div>
  )
}

export default DeleteManyUsersButton
