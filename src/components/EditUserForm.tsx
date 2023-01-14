import { useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { updateUserDetails } from "../store/userSlice"
import { User } from "../types/Users"

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="role"
        value={values.role}
        onChange={onChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditUserForm
