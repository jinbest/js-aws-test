import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetail } from "./pages/UserDetail";
import { CreateUser } from "./pages/CreateUser";
import "./App.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user/:userId" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
