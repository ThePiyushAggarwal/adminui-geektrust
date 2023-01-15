import { useState, Key, useMemo } from "react"
import { User } from "../types/Users"
import DeleteManyUsersButton from "./DeleteManyUsersButton"
import Table from "./Table/Table"
import { columns } from "./TableColumns"
import SearchBar from "./SearchBar"
import { filterOnSearch } from "../utils/filterOnSearch"
import Footer from "./Footer"
import { PAGE_SIZE } from "../constants/pageSize"
import Pagination from "./Pagination/Pagination"

interface UserTableProps {
  data: User[]
}

const pageSize = PAGE_SIZE

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
      <div className="bg-white/80 mt-4 w-11/12 md:w-10/12 lg:w-8/12 mx-auto rounded-lg px-4 py-8 md:py-8 md:px-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-4 overflow-x-auto">
          <Table<User>
            columns={columns}
            data={filteredData}
            rowKey="id"
            rowSelection={rowSelection}
            pagination={pagination}
          />
        </div>

        <div className="pt-4 flex flex-col-reverse items-center md:flex-row md:justify-between gap-y-4">
          <DeleteManyUsersButton
            userIds={selectedKeysForDeletion}
            setSelectedRowKeys={setSelectedRowKeys}
          />

          {/* Pagination */}
          <Pagination pagination={pagination} />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default UserTable
