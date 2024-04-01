import React from "react"
import { SettingsSidebar } from "./settings"
import s from "./navigation.module.css"
import { NavLink, useLocation } from "react-router-dom"

export const Navigation = () => {
  const location = useLocation()
  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? `${s.navLink} ${s.active}` : `${s.navLink}`
  }
  return (
    <div className={s.menuBox}>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={`${s.navItem} `}>
            <NavLink to={"/profile"} className={getNavLinkClass("/profile")}>
              Profile
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={"/dialogs"} className={getNavLinkClass("/dialogs")}>
              Messages
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={"/users"} className={getNavLinkClass("/users")}>
              Users
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={"/news"} className={getNavLinkClass("/news")}>
              News
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={"/music"} className={getNavLinkClass("/music")}>
              Music
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.settingsBox}>
        <button className={s.settingsBtn}>Settings</button>
        <SettingsSidebar />
      </div>
      <div className={s.friends}>friends</div>
    </div>
  )
}
