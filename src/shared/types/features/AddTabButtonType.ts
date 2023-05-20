import { ReactNode } from "react"


interface AddTabButtonProps {
  children: ReactNode
  tabId: number
}


export type AddTabButtonType = ({ children, tabId, }: AddTabButtonProps) => JSX.Element
