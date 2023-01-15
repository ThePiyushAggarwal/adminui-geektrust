import { useMemo, Key, useState } from "react"
import { PAGE_SIZE } from "../constants/pageSize"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { deleteManyUsers } from "../store/userSlice"
import { User } from "../types/Users"
import Table from "./Table/Table"
import { ColumnsType } from "./Table/Table.types"

const columns: ColumnsType<User> = [
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
]

interface Props {
  userIds: Key[]
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<Key[]>>
  toggleModal: () => void
}

const pageSize = PAGE_SIZE

function DeleteUsersConfirmationTable({
  setSelectedRowKeys: setSelectedRowKeysMain,
  userIds,
  toggleModal,
}: Props) {
  const dispatch = useAppDispatch()
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(userIds)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { users } = useAppSelector((state) => state.user)

  const data = useMemo(
    () => users.filter((user) => userIds.includes(user.id)),
    [userIds]
  )

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => setSelectedRowKeys(selectedRowKeys),
  }

  const pagination = {
    currentPage,
    pageSize,
    totalDocs: data.length,
    onChange: (page: number) => setCurrentPage(page),
  }

  const onDelete = () => {
    dispatch(deleteManyUsers(selectedRowKeys))
    setSelectedRowKeysMain([])
    toggleModal()
  }

  return (
    <>
      <Table<User>
        columns={columns}
        data={data}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={pagination}
      />
      <button
        onClick={onDelete}
        className="text-red-500 text-3xl"
        disabled={!selectedRowKeys.length}
      >
        Delete Selected
      </button>
    </>
  )
}

export default DeleteUsersConfirmationTable
