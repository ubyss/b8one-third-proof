import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Login from "./pages/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </Router>
  )
}

export default App
