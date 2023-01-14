import { Key } from "react"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types/Users"

export interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<User[]>) => {
      state.users = payload
    },
    deleteUser: (state, { payload }: PayloadAction<Key>) => {
      state.users = state.users.filter((user) => user.id !== payload)
    },
    deleteManyUsers: (state, { payload }: PayloadAction<Key[]>) => {
      state.users = state.users.filter((user) => !payload.includes(user.id))
    },
    updateUserDetails: (state, { payload }: PayloadAction<User>) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      )
    },
  },
})

export const { deleteUser, setUsers, updateUserDetails, deleteManyUsers } =
  userSlice.actions

export default userSlice.reducer
