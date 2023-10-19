import {Routes, Route} from "react-router-dom"

import { Widget } from "./components/Widget"

export function App(){
  return (
    <>
    <Routes>
      <Route path="/:id" element={<Widget/>}/>
    </Routes>
    </>
  )
};
