import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import './App.css'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Main/>}>
      </Route>
     </Routes>
    </>
  )
}

export default App
