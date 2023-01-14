import { useMemo, useState, useEffect } from "react"
import { GET_USERS_ENDPOINT } from "../api/getUsersEndpoint"
import useQuery from "../api/useQuery"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setUsers } from "../store/userSlice"
import { User } from "../types/Users"
import { filterOnSearch } from "../utils/filterOnSearch"
import SearchBar from "./SearchBar"
import UserTable from "./UserTable"

function UserDetails() {
  const dispatch = useAppDispatch()
  const { data } = useQuery<User[]>(GET_USERS_ENDPOINT)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const { users } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (data?.length) {
      dispatch(setUsers(data))
    }
  }, [data])

  /**
   * TODO I want to use debouncing here.
   * Haven't made up my mind fully.
   * Let's see.
   */
  const filteredData = useMemo(
    () => filterOnSearch<User>(users, searchTerm, ["id"]),
    [searchTerm, users]
  )

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredData && <UserTable data={filteredData} />}
    </>
  )
}

export default UserDetails
