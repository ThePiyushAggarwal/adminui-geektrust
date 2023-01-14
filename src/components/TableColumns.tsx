import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { ColumnsType } from "../types/Table"

export const columns: ColumnsType = [
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
    render: () => (
      <>
        <BsPencilSquare /> <BsTrash />
      </>
    ),
    clickToSelect: false,
  },
]
