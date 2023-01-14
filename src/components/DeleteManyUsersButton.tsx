import { Key } from "react"
import { useAppDispatch } from "../store/hooks"
import { deleteManyUsers } from "../store/userSlice"

function DeleteManyUsersButton({ userIds }: { userIds: Key[] }) {
  const dispatch = useAppDispatch()

  return (
    <div
      onClick={() => dispatch(deleteManyUsers(userIds))}
      className="text-red-500 text-3xl"
    >
      Delete Selected
    </div>
  )
}

export default DeleteManyUsersButton
