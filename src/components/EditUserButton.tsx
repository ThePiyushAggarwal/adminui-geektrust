import { useState } from "react"
import { BsPencilSquare } from "react-icons/bs"
import { User } from "../types/Users"
import Modal from "./Modal/Modal"
import EditUserForm from "./EditUserForm"

interface Props {
  user: User
}

function EditUserButton({ user }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen((val) => !val)

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="text-blue-700 text-xl"
      >
        <BsPencilSquare />
      </button>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          toggle={toggleModal}
          className="w-4/5 md:w-3/5 lg:w-1/2"
        >
          <EditUserForm user={user} toggle={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default EditUserButton
