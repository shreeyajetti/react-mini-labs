import { configureStore } from '@reduxjs/toolkit'
import shortlistReducer from './shortlistSlice'

const store = configureStore({
  reducer: {
    shortlist: shortlistReducer,
  },
})

export default store
