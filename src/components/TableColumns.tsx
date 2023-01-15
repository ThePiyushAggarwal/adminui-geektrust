import { User } from "../types/Users"
import DeleteUserButton from "./DeleteUserButton"
import EditUserButton from "./EditUserButton"
import { ColumnsType } from "./Table/Table.types"

export const columns: ColumnsType<User> = [
  {
    key: "1",
    label: "Name",
    dataIndex: "name",
  },
  {
    key: "2",
    label: "Email",
    dataIndex: "email",
  },
  {
    key: "3",
    label: "Role",
    dataIndex: "role",
  },
  {
    key: "4",
    label: "Actions",
    render: (user) => (
      <div className="flex gap-x-4 justify-center">
        <EditUserButton user={user} />
        <DeleteUserButton id={user.id} />
      </div>
    ),
  },
]
