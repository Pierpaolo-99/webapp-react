import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import AuthLayout from "./DefaultLayout/AuthLayout"
import Home from "./Pages/Home"
import SingleMovie from "./Pages/SingleMovie"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import Admin from "./Pages/Admin/Admin"
import CreateMovies from "./Pages/Admin/CreateMovies"
import NotFound from "./Pages/NotFound"
import GlobalContext from "./Context/GlobalContext"
import { AuthProvide } from "./Context/AuthContext"

export default function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AuthProvide>
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

              <Route Component={AuthLayout}>
                <Route path="/admin" Component={Admin} />
                <Route path="/admin/movies/create" Component={CreateMovies} />
              </Route>

            </Routes>
          </BrowserRouter>
        </GlobalContext.Provider>
      </AuthProvide>
    </>
  )
}
