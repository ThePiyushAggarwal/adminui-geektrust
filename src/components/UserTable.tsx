import { User } from "../types/Users"
import Table from "./Table/Table"
import { columns } from "./TableColumns"

interface UserTableProps {
  data: User[]
}

function UserTable({ data }: UserTableProps) {
  return <Table<User> columns={columns} data={data} rowKey="id" />
}

export default UserTable
