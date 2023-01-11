import { GET_USERS_ENDPOINT } from "../api/getUsersEndpoint"
import useQuery from "../api/useQuery"
import { User } from "../types/Users"
import SearchBar from "./SearchBar"
import UserTable from "./UserTable"

function UserDetails() {
  const { data } = useQuery<User[]>(GET_USERS_ENDPOINT)

  return (
    <>
      <SearchBar />
      {data && <UserTable data={data} />}
    </>
  )
}

export default UserDetails
