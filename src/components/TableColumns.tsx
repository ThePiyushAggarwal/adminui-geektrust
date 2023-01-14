import { ColumnsType } from "../types/Table"
import { User } from "../types/Users"
import DeleteUserButton from "./DeleteUserButton"
import EditUserButton from "./EditUserButton"

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
      <>
        <EditUserButton user={{ ...user, role: "Iron Man" }} />
        <DeleteUserButton id={user.id} />
      </>
    ),
  },
]
