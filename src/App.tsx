import React from "react"
import "./styles/reset.css"
import "./App.css"
import { Header } from "components/header"
import { Navigation } from "components/navigation"
import { Dialogs } from "components/dialogs"
import { Profile } from "components/profile"
import { BrowserRouter, Route } from "react-router-dom"
import { Post, State } from "index"

/*{ id: string; message: string; likeCount: number }[] }*/

export type PropsType = State
function App(props: PropsType) {
  const { posts, userData, messages } = props
  return (
    <BrowserRouter>
      <div className="App">
        <div className={"App__wrapper"}>
          <Header />
          <Navigation />
          {/*<Profile />*/}
          <div className="mainContainer">
            <main className="main">
              {/*<Route exact path={"/dialogs"} component={Dialogs} />*/}
              {/*<Route path={"/profile"} component={Profile} />*/}

              <Route exact path={"/dialogs"} render={() => <Dialogs />} />
              <Route path={"/profile"} render={() => <Profile posts={posts} />} />
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
