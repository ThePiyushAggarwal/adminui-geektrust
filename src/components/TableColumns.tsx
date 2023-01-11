import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { ColumnsType } from "../types/Table"

export const columns: ColumnsType = [
  {
    key: "1",
    label: "",
    dataIndex: "id",
  },
  {
    key: "2",
    label: "Name",
    dataIndex: "name",
  },
  {
    key: "3",
    label: "Email",
    dataIndex: "email",
  },
  {
    key: "4",
    label: "Role",
    dataIndex: "role",
  },
  {
    key: "5",
    label: "Actions",
    render: () => (
      <>
        <BsPencilSquare /> <BsTrash />
      </>
    ),
  },
]
