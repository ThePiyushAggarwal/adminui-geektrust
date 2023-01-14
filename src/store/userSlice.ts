import { createSlice } from "@reduxjs/toolkit"
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
    setUsers: (state, { payload }) => {
      state.users = payload
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload)
    },
    updateUserDetails: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      )
    },
  },
})

export const { deleteUser, setUsers, updateUserDetails } = userSlice.actions

export default userSlice.reducer
