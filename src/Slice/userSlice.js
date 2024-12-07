import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('currentuser'))? JSON.parse(localStorage.getItem('currentuser')) : null ,
  },
  reducers: {
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { userData } = userSlice.actions

export default userSlice.reducer