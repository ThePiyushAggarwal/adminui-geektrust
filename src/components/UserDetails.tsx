import { useMemo, useState } from "react"
import { GET_USERS_ENDPOINT } from "../api/getUsersEndpoint"
import useQuery from "../api/useQuery"
import { User } from "../types/Users"
import { filterOnSearch } from "../utils/filterOnSearch"
import SearchBar from "./SearchBar"
import UserTable from "./UserTable"

function UserDetails() {
  const { data } = useQuery<User[]>(GET_USERS_ENDPOINT)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredData = useMemo(
    () => data && filterOnSearch<User>(data, searchTerm, ["id"]),
    [searchTerm, data]
  )

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredData && <UserTable data={filteredData} />}
    </>
  )
}

export default UserDetails
