import React from "react"
import s from "./select.module.css"
export const Select: React.FC<SelectProps> = (props) => {
  const { label, options } = props
  return (
    <div className={s.selectWrapper}>
      <form className={s.selectForm}>
        <label htmlFor={label} className={s.selectLabel}>
          {label}:
        </label>
        <select id={label} name={label.toLowerCase()} className={s.select}>
          {options.map((option, index) => (
            <option key={index} value={option.value} className={s.selectOption}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

type Option = {
  label: string
  value: string
}

type SelectProps = {
  label: string
  options: Option[]
  // type: string
}
