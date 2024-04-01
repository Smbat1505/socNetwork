import React from "react"
import s from "components/dialogs/dialogItem/DialogsItem.module.css"
import { NavLink } from "react-router-dom"

interface DialogProps {
  id: string
  name: string
}

export const DialogsItem: React.FC<DialogProps> = (props) => {
  const { id, name } = props
  const path = `/dialogs/${id}#${name}`
  return (
    <div className={`${s.dialog} `}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
}
