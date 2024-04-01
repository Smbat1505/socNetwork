import React from "react"
import s from "components/dialogs/message/Message.module.css"

interface MessageProps {
  message: string
}

export const Message: React.FC<MessageProps> = (props) => {
  const { message } = props
  return <div className={s.message}>{message}</div>
}
