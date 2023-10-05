import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import RegisterComponent from "./components/register/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} exact />
        <Route path="/auth/register" element={<RegisterComponent />} exact />
      </Routes>
    </Router>
  );
}

export default App;
