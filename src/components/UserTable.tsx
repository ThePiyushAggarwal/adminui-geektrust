import useQuery from "../api/useQuery"
import { GET_USERS_ENDPOINT } from "../api/getUsersEndpoint"
import { User } from "../types/Users"
import { BsPencilSquare, BsTrash } from "react-icons/bs"

function UserTable() {
  const { data } = useQuery<User[]>(GET_USERS_ENDPOINT)

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {data?.map((user) => (
          <tr key={user.id}>
            <td></td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <BsPencilSquare /> <BsTrash />
            </td>
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default UserTable
