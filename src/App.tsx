import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
