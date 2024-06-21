import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Con from "./pages/Contact"
import About from "./pages/About"
import Info from "./pages/Info/Info"
import Userprofile from "./pages/UserTicket/Userprofile"
import Login from "./pages/User_login_register/Userlogin"
import Signup from "./pages/User_login_register/Singup"
import Staff from "./pages/User_login_register/Staff"
import Movie_Edit from "./pages/Staff/Movieedit"
import Movie_Add from "./pages/Staff/MovieAdd"
import SeatControl from "./pages/Staff/SeatControl"
import Manager from "./pages/Manager/Manager"
export default function App() {
  return(
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/Info"  element={<Info/>}/>
          <Route path="/Info/:id" element={<Info/>}/>
          <Route path="/Contact"  element={<Con/>}/>
          <Route path="/About"  element={<About/>}/>
          <Route path="/Profile"  element={<Userprofile/>}/>
          <Route path="/Userlogin"  element={<Login/>}/>
          <Route path="/Usersignup"  element={<Signup/>}/>
          <Route path="/Staff"  element={<Staff/>}/>
          <Route path="/MovieEdit"  element={<Movie_Edit/>}/>
          <Route path="/MovieAdd"  element={<Movie_Add/>}/>
          <Route path="/SeatControl"  element={<SeatControl/>}/>
          <Route path="/Manager"  element={<Manager/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
