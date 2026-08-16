import TestPage from "./pages/TestPage"
import TestPageI from "./pages/TestPage_Individual"
import { Routes, Route } from "react-router-dom";
function App() {
  return(
    <>
    <h1>Test</h1>
    <Routes>
      <Route path="/products" element={<TestPage/>}/>
      <Route path="/products/:id" element={<TestPageI/>}/>
    </Routes>
    </>
  )
}

export default App
