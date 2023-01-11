import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { User } from "../types/Users"

interface UserTableProps {
  data: User[]
}

function UserTable({ data }: UserTableProps) {
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
