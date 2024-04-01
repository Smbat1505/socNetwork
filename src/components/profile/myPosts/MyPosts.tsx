import React from "react"
import s from "./MyPosts.module.css"
import { Post } from "components/profile/myPosts/post"
import { State } from "index"

type MyPostsProps = State
export const MyPosts: React.FC<MyPostsProps> = (props) => {
  const { posts } = props

  const postsElement = posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ))
  return (
    <div className={`${s.section_myPosts}`}>
      <section className={`${s.myPosts}`}>
        <h2>My posts</h2>
        <div className={s.textarea_box}>
          <section className={s.addBlock}>
            <div className={`${s.textareaBlock}`}>
              <textarea className={s.textarea} placeholder={"type your post"} />
            </div>
            <div className={`${s.btnBlock}`}>
              <button className={s.addPostBtn}>add post</button>
            </div>
          </section>
        </div>
        <div className={`${s.section_newPost}`}>
          <section>new post</section>
        </div>
        <div className={`${s.section_posts}`}>
          <section>
            <div className={`${s.posts}`}>{postsElement}</div>
          </section>
        </div>
      </section>
    </div>
  )
}
