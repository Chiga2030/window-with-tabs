import { useAppSelector } from "../../../../app/store/hooks"


export const TabContent = () => {
  const tabs = useAppSelector(state => state.windowWithTabs.tabs)
  const currentTabId = useAppSelector(state => state.windowWithTabs.currentTabId)

  const tabContent = tabs.find(tab => tab.id === currentTabId)?.content

  return (
    <>
      { tabContent }
    </>
  )
}
