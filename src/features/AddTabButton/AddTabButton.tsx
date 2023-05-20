import { useAppDispatch } from "../../app/store/hooks"
import { onCreateTab } from "../../entities/Window/model/windowWithTabsSlice"
import { AddTabButtonType } from "../../shared/types/features/AddTabButtonType"


export const AddTabButton: AddTabButtonType = ({
  children,
  tabId,
}) => {
  const dispatch = useAppDispatch()


  return (
    <button type={ "button" } onClick={ () => dispatch(onCreateTab(tabId)) }>
      { children }
    </button>
  )
}
