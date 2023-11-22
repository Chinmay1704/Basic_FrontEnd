import './App.css';
import Feed from "./components/feed"
import Notis from "./components/notification";
import Profile from './components/profilePage';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="" element={<Feed/>} />
            <Route path="/Notis" element={<Notis/>} />
            <Route path="/profilePage" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="container-fluid">
        <div className="footer">
          <a href='/'><i className="fa-solid fa-house"></i></a>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-square-plus"></i>
          <i className="fa-solid fa-clapperboard"></i>

          <a href='/profilePage'><img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="user.jpg"/>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
