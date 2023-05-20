import { useAppSelector } from "../../../../app/store/hooks"
import styles from './Menu.module.scss'
import { AddTabButtonType } from "../../../../shared/types/features/AddTabButtonType"


interface MenuProps {
  actionSlots: {
    AddTabButton: AddTabButtonType
  }
}


export const Menu = ({
  actionSlots,
}: MenuProps) => {
  const tabs = useAppSelector(store => store.windowWithTabs.tabs)

  const { AddTabButton } = actionSlots


  return (
    <div className={ styles.menu }>
      Menu

      <div className={ styles.buttonsWrapper }>
        { tabs.map(tab => (
          <AddTabButton key={ tab.id } tabId={ tab.id }>
            { tab.name }
          </AddTabButton>
        )) }
      </div>
    </div>
  )
}
