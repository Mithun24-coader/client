import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import UserLists from "./Components/Pages/UserLists";
import Sidebar from "./Components/SidebarNavigations/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/userList" component={UserLists} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
