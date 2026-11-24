import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ids: [],
}

const shortlistSlice = createSlice({
  name: 'shortlist',
  initialState,
  reducers: {
    addToShortlist: (state, action) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload)
      }
    },
    removeFromShortlist: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload)
    },
    clearShortlist: (state) => {
      state.ids = []
    },
  },
})

export const { addToShortlist, removeFromShortlist, clearShortlist } = shortlistSlice.actions
export default shortlistSlice.reducer
