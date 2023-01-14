import { Key, useState } from "react"
import DeleteUsersConfirmationTable from "./DeleteUsersConfirmationTable"
import Modal from "./Modal/Modal"

interface Props {
  userIds: Key[]
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<Key[]>>
}

function DeleteManyUsersButton({ userIds, setSelectedRowKeys }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen((val) => !val)

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-red-500 text-3xl"
        disabled={!userIds.length}
      >
        Delete Selected
      </button>
      {isModalOpen && (
        <Modal open={isModalOpen} toggle={toggleModal}>
          <DeleteUsersConfirmationTable
            userIds={userIds}
            setSelectedRowKeys={setSelectedRowKeys}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  )
}

export default DeleteManyUsersButton
