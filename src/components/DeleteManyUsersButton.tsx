import { Key, useState } from "react"
import DeleteButton from "./Button/DeleteButton"
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
      <DeleteButton onClick={toggleModal} disabled={!userIds.length}>
        Delete Selected
      </DeleteButton>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          toggle={toggleModal}
          className="w-4/5 md:w-3/5 lg:w-1/2"
        >
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
