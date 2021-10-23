import { configureStore } from '@reduxjs/toolkit'
import storiesReducers from '../slices/storiesSlice'
import { logger } from 'redux-logger'

const store = configureStore({
  reducer: {
    story: storiesReducers,
  },
  middleware: [logger],
})

export default store
