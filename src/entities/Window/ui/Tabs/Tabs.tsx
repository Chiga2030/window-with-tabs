import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks"
import { onSetCurrentTabId } from "../../model/windowWithTabsSlice"
import styles from './Tabs.module.scss'


export const Tabs = () => {
  const dispatch = useAppDispatch()
  const tabs = useAppSelector(state => state.windowWithTabs.tabs)
  const opennedTabsId = useAppSelector(state => state.windowWithTabs.opennedTabsId)

  const tablist = opennedTabsId.map(id => tabs[ id ])



  return (
    <div className={ styles.wrapper }>
      { tablist.map((tab, index) => (
        <span className={ styles.tab } key={ index } onClick={ () => dispatch(onSetCurrentTabId(tab.id)) }>
          { tab.name }
        </span>
      )) }
    </div>
  )
}
