import { useEffect } from "react"
import { GET_USERS_ENDPOINT } from "../api/getUsersEndpoint"
import useQuery from "../api/useQuery"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setUsers } from "../store/userSlice"
import { User } from "../types/Users"
import UserTable from "./UserTable"

function UserDetails() {
  const dispatch = useAppDispatch()
  const { data } = useQuery<User[]>(GET_USERS_ENDPOINT)

  const { users } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (data?.length) {
      dispatch(setUsers(data))
    }
  }, [data])

  return <UserTable data={users} />
}

export default UserDetails
