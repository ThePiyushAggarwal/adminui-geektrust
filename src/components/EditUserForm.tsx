import { useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { updateUserDetails } from "../store/userSlice"
import { User } from "../types/Users"
import PrimaryButton from "./Button/PrimaryButton"
import Input from "./Form/Input"

interface Props {
  user: User
  toggle: () => void
}

function EditUserForm({ user, toggle }: Props) {
  const dispatch = useAppDispatch()
  const { id, email, name, role } = user

  const [values, setValues] = useState({
    name,
    email,
    role,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, role } = values
    dispatch(
      updateUserDetails({
        id,
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
      })
    )
    toggle()
  }

  return (
    <form onSubmit={onSubmit} className="text-left">
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={values.name}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg mb-4"
      />
      <label>Email</label>
      <Input
        type="email"
        name="email"
        value={values.email}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg mb-4"
      />
      <label>Role</label>
      <Input
        type="text"
        name="role"
        value={values.role}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg mb-4"
      />
      <div className="text-center">
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </div>
    </form>
  )
}

export default EditUserForm
