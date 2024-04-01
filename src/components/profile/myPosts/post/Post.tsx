import React from "react"
import s from "./Post.module.css"
import { avatar } from "assets"

export const Post: React.FC<PostPropsType> = (props) => {
  const { message, likeCount } = props

  return (
    <section className={s.post}>
      <img className={`${s.userLogo}`} src={avatar} alt="" />
      <div style={{ paddingLeft: "30px" }}>
        <b>{message + " "}</b>
      </div>

      <div style={{ paddingLeft: "30px" }}>
        <span>{"like " + likeCount}</span>
      </div>
    </section>
  )
}

type PostPropsType = {
  message: string
  likeCount: number
}
