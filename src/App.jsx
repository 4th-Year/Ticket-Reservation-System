import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import RegisterComponent from "./components/register/register";
import Navbar from "./components/navbar/navbar";

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
      </Routes>
    </Router>
  );
}

export default App;
