import TestPage from "./pages/TestPage"
import TestPageI from "./pages/TestPage_Individual"
import UserProfiles from "./pages/UserProfile"
import NavbarTest from "./pages/TempBar"
import Auth from "./pages/AuthTest"
import Reg from "./pages/Reg"
import Login from "./pages/Login"
import AdminPanel from "./pages/AdminPanel"
import Protected from "./pages/Protected"
import TopUptest from "./pages/TopUptest"
import { Routes, Route } from "react-router-dom";
function App() {
  return(
    <>
    <NavbarTest/>
    <Routes>
      <Route path="/products" element={<TestPage/>}/>
      <Route path="/products/:id" element={<TestPageI/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/register" element={<Reg/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/me" element={<Protected>
          <UserProfiles/>
      </Protected>}/>
      <Route path="/topup" element={<TopUptest/>}/>
    </Routes>
    </>
  )
}

export default App
