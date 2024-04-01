import React from "react"
import { logo } from "../../assets"
import s from "./header.module.css"

export const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <header className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" style={{ width: "150px" }} />
        </div>
        <div className={s.loginBtn}>Login</div>
      </header>
    </div>
  )
}
