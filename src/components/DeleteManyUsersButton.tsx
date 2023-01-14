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
    <button
      onClick={onClick}
      className="text-red-500 text-3xl"
      disabled={!userIds.length}
    >
      Delete Selected
    </button>
  )
}

export default DeleteManyUsersButton
