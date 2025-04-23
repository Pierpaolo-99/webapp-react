import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import Home from "./Pages/Home"
import SingleMovie from "./Pages/SingleMovie"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import NotFound from "./Pages/NotFound"
import GlobalContext from "./Context/GlobalContext"

export default function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>

              <Route path="/" Component={Home} />
              <Route path="/movies/:id" Component={SingleMovie} />

              <Route path="/*" Component={NotFound} />

              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}
