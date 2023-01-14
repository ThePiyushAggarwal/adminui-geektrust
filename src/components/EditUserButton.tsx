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
      <BsPencilSquare onClick={toggleModal} />
      {isModalOpen && (
        <Modal open={isModalOpen} toggle={toggleModal}>
          <EditUserForm user={user} toggle={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default EditUserButton
