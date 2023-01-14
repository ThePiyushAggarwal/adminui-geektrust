import { useState, Key } from "react"
import { User } from "../types/Users"
import DeleteManyUsersButton from "./DeleteManyUsersButton"
import Table from "./Table/Table"
import { columns } from "./TableColumns"

interface UserTableProps {
  data: User[]
}

function UserTable({ data }: UserTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => setSelectedRowKeys(selectedRowKeys),
  }

  return (
    <>
      <Table<User>
        columns={columns}
        data={data}
        rowKey="id"
        rowSelection={rowSelection}
      />
      <DeleteManyUsersButton
        userIds={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
      />
    </>
  )
}

export default UserTable
