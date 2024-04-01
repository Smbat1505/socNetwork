import React from "react"
import s from "./Dialogs.module.css"
import { Message } from "components/dialogs/message"
import { DialogsItem } from "components/dialogs/dialogItem"

export const Dialogs: React.FC<DialogsPropsType> = ({ i, io, oo }) => {
  const userData = [
    { id: "1", name: "Dima" },
    { id: "2", name: "Alex" },
    { id: "3", name: "Oleg" },
    { id: "4", name: "Sergo" },
    { id: "5", name: "Sano" },
  ]

  const dialogs = userData.map((dialog) => {
    return <DialogsItem id={dialog.id} name={dialog.name} />
  })
  const messages = [
    { id: "1", message: "Hi friend" },
    { id: "2", message: "good morning" },
    { id: "3", message: "how are you?" },
    { id: "4", message: "shi is a smart cookies" },
    { id: "5", message: "oh, this is great" },
  ]

  const messagesElements = messages.map((message) => <Message message={message.message} />)
  return (
    <div className={`${s.dialogs_section}`}>
      <section className={`${s.dialogs}`}>
        <div className={s.dialogItems}>{dialogs}</div>
        <div className={s.messages}>{messagesElements}</div>
      </section>
    </div>
  )
}

export type DialogsPropsType = {
  i?: string
  io?: number
  oo?: boolean
}
