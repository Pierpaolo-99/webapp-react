import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import Home from "./Pages/Home"
import SingleMovie from "./Pages/SingleMovie"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/movie/:id" Component={SingleMovie} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
