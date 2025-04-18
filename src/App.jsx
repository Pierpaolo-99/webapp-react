import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import Home from "./Pages/Home"
import SingleMovie from "./Pages/SingleMovie"
import NotFound from "./Pages/NotFound"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/movies/:id" Component={SingleMovie} />

            <Route path="/*" Component={NotFound} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
