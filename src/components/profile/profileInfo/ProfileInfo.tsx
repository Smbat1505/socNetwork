import s from "components/profile/profileInfo/ProfileInfo.module.css"
import { Screen2 } from "assets"
import React from "react"

export const ProfileInfo = () => {
  return (
    <div className={`${s.section_screen}`}>
      <section className={`${s.sectionImg}`}>
        <div className={`${s.imgBlock}`}>
          <img src={Screen2} alt="altay" />
        </div>

        <div className={`${s.section_description}`}>
          <section className={`${s.sectionAvatDescr}`}>avatar + description</section>
        </div>
      </section>
    </div>
  )
}
