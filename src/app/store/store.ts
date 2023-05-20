import { configureStore } from '@reduxjs/toolkit'
import windowWithTabsSlice from '../../entities/Window/model/windowWithTabsSlice'


export const store = configureStore({
  reducer: {
    windowWithTabs: windowWithTabsSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
