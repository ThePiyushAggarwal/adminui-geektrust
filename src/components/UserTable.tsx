import { useState, Key, useMemo } from "react"
import { User } from "../types/Users"
import DeleteManyUsersButton from "./DeleteManyUsersButton"
import Table from "./Table/Table"
import { columns } from "./TableColumns"
import SearchBar from "./SearchBar"
import { filterOnSearch } from "../utils/filterOnSearch"

interface UserTableProps {
  data: User[]
}

const pageSize = 10

function UserTable({ data }: UserTableProps) {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  /** Filters data based on search and sets
   * currentPage to 1
   */
  const filteredData = useMemo(() => {
    setCurrentPage(1)
    return filterOnSearch<User>(data, searchTerm, ["id"])
  }, [searchTerm, data])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => setSelectedRowKeys(selectedRowKeys),
  }

  const pagination = {
    currentPage,
    pageSize,
    totalDocs: filteredData.length,
    onChange: (page: number) => setCurrentPage(page),
  }

  /** This function filters out the values which are
   * selected but are not appearing on screen because the
   * search term has changed.
   */
  const selectedKeysForDeletion = useMemo(
    () =>
      selectedRowKeys.filter((key) =>
        filteredData.some((user) => user.id === key)
      ),
    [selectedRowKeys, filteredData]
  )

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Table<User>
        columns={columns}
        data={filteredData}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={pagination}
      />

      <DeleteManyUsersButton
        userIds={selectedKeysForDeletion}
        setSelectedRowKeys={setSelectedRowKeys}
      />
    </>
  )
}

export default UserTable
