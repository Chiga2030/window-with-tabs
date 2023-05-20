import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Tab {
  id: number
  name: string
  content: string
}

interface WindowState {
  tabs: Tab[]
  opennedTabsId: number[]
  currentTabId: number | null
}


const initialState: WindowState = {
  tabs: [
    {
      id: 1,
      name: 'tab - 1',
      content: 'content tab - 1',
    },
    {
      id: 2,
      name: 'tab - 2',
      content: 'content tab - 2',
    },
    {
      id: 3,
      name: 'tab - 3',
      content: 'content tab - 3',
    },
  ],
  opennedTabsId: [],
  currentTabId: null,
}


export const windowWithTabsSlice = createSlice({
  name: 'windowWithTabs',
  initialState,
  reducers: {
    onCreateTab: (state, action: PayloadAction<number>) => {
      const tabIndex = state.tabs.findIndex(tab => tab.id === action.payload)

      state.opennedTabsId.push(tabIndex)
    },

    onSetCurrentTabId: (state, action: PayloadAction<number>) => {
      state.currentTabId = action.payload
    }
  },
})


export const { onCreateTab, onSetCurrentTabId } = windowWithTabsSlice.actions

export default windowWithTabsSlice.reducer
