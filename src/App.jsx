import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import RegisterComponent from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import TravelerProfile from "./components/traveler/travelerProfile";
import EditProfile from "./components/traveler/editProfile";
import TravelersList from "./components/traveler/travelersList";

function App() {
  let url = window.location.href;
  let status = false;

  if (
    url == "http://localhost:3000/auth/register" ||
    url == "http://localhost:3000"
  ) {
    status = true;
  }
  return (
    <Router>
      {status ? <></> : <Navbar />}
      <Routes>
        <Route path="/" element={<LoginComponent />} exact />
        <Route path="/auth/register" element={<RegisterComponent />} exact />
        <Route path="/traveler/profile" element={<TravelerProfile />} exact />
        <Route path="/UserList" element={<TravelersList />} exact />
        <Route path="/traveler/editProfile" element={<EditProfile />} exact />
      </Routes>
    </Router>
  );
}

export default App;
