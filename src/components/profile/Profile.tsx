import React from "react"
import s from "./Profile.module.css"
import { MyPosts } from "./myPosts/MyPosts"
import { ProfileInfo } from "components/profile/profileInfo"
import { State } from "index"

type ProfileProps = State

export const Profile: React.FC<ProfileProps> = (props) => {
  const { posts } = props
  return (
    <section className={`${s.profile_section}`}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </section>
  )
}
