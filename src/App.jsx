import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginBar from "./components/LoginBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/barista-login" element={<LoginBar />} />
      </Routes>
    </Router>
  );
}

export default App;
