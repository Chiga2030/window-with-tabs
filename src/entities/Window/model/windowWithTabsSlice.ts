import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store/store'

interface Tab {
  name: string
  content: string
}

interface WindowState {
  tabs: Tab[]
}

const initialState: WindowState = {
  tabs: [
    {
      name: 'tab - 1',
      content: 'content tab - 1',
    },
    {
      name: 'tab - 2',
      content: 'content tab - 2',
    },
    {
      name: 'tab - 3',
      content: 'content tab - 3',
    },
  ],
}


export const windowWithTabsSlice = createSlice({
  name: 'windowWithTabs',
  initialState,
  reducers: {},
})

export const { } = windowWithTabsSlice.actions

export const tabs = (state: RootState) => state.windowWithTabs.tabs

export default windowWithTabsSlice.reducer
