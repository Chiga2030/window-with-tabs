import styles from './Window.module.scss'
import { Menu } from './ui/Menu/Menu'


export const Window = () => {
  return (
    <div className={ styles.window }>
      <div className={ styles.menu }>
        <Menu />
      </div>

      <div className={ styles.content }>
        <div className={ styles.tabs }>
          tabs
        </div>

        <div className={ styles.tabContent }>
          tab content
        </div>
      </div>
    </div>
  )
}
