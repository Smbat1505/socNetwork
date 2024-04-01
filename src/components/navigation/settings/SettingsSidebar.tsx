import React from "react"
import { selectData } from "./data"
import { Select } from "../../../ui"
import s from "../navigation.module.css"

export const SettingsSidebar = () => {
  return (
    <div className={s.settingsBar}>
      <Select label="Theme" options={selectData.themeOptions} />
      <Select label="Language" options={selectData.languageOptions} />
    </div>
  )
}
