import { Window } from "../../entities/Window"
import { AddTabButton } from "../../features/AddTabButton/AddTabButton"


export const WindowWithTabs = () => {
  return (
    <Window actionSlots={ {
      AddTabButton,
    } } />
  )
}
