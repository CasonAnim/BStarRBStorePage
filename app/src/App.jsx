import TestPage from "./pages/TestPage"
import TestPageI from "./pages/TestPage_Individual"
import UserProfiles from "./pages/UserProfile"
import Auth from "./pages/AuthTest"
import Reg from "./pages/Reg"
import Login from "./pages/Login"
import ProfileTest from "./pages/ProfileTest"
import Protected from "./pages/Protected"
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
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/register" element={<Reg/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/me" element={<Protected>
          <UserProfiles/>
      </Protected>}/>
      {/* <Route path="/topup" element={<TopUptest/>}/> */}
    </Routes>
    </>
  )
}

export default App
