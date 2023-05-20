import styles from './Window.module.scss'
import { Menu } from './ui/Menu/Menu'
import { AddTabButtonType } from '../../shared/types/features/AddTabButtonType'
import { Tabs } from './ui/Tabs/Tabs'
import { TabContent } from './ui/TabContent/TabContent'


interface WindowProps {
  actionSlots: {
    AddTabButton: AddTabButtonType
  }
}

export const Window = ({
  actionSlots,
}: WindowProps) => {
  return (
    <div className={ styles.window }>
      <div className={ styles.menu }>
        <Menu actionSlots={ {
          AddTabButton: actionSlots.AddTabButton
        } } />
      </div>

      <div className={ styles.content }>
        <div className={ styles.tabs }>
          <Tabs />
        </div>

        <div className={ styles.tabContent }>
          <TabContent />
        </div>
      </div>
    </div>
  )
}
