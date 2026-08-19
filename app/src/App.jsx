import TestPage from "./pages/TestPage"
import TestPageI from "./pages/TestPage_Individual"
import UserProfiles from "./pages/UserProfile"
import Auth from "./pages/AuthTest"
// import TopUptest from "./pages/TopUptest"
import { Routes, Route } from "react-router-dom";
function App() {
  return(
    <>
    <h1>Test</h1>
    <Routes>
      <Route path="/products" element={<TestPage/>}/>
      <Route path="/products/:id" element={<TestPageI/>}/>
      <Route path="/auth" element={<Auth/>}/>
      {/* <Route path="/topup" element={<TopUptest/>}/> */}
    </Routes>
    </>
  )
}

export default App
