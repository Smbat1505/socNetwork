import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

const posts = [
  { id: "1", message: "Today is a very nice day", likeCount: 10 },
  { id: "2", message: "good morning", likeCount: 12 },
  { id: "3", message: "how are you?", likeCount: 14 },
  { id: "4", message: "shi is a smart cookies", likeCount: 100 },
  { id: "5", message: "oh, this is great", likeCount: 3 },
]

const userData: UserData[] = [
  { id: "1", name: "Dima" },
  { id: "2", name: "Alex" },
  { id: "3", name: "Oleg" },
  { id: "4", name: "Sergo" },
  { id: "5", name: "Sano" },
]
//

const messages: Message[] = [
  { id: "1", message: "Hi friend" },
  { id: "2", message: "good morning" },
  { id: "3", message: "how are you?" },
  { id: "4", message: "shi is a smart cookies" },
  { id: "5", message: "oh, this is great" },
]

ReactDOM.render(<App posts={posts} />, document.getElementById("root"))

export type Post = {
  posts: {
    id: string
    message: string
    likeCount: number
  }
}

export type UserData = {
  id: string
  name: string
}

export type Message = {
  id: string
  message: string
}

export type State = {
  posts: Post
  userData: UserData[]
  messages: Message[]
}
