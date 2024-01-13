import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewShare from "./pages/NewShare";
import Favorites from "./pages/Favorites";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/newshare" element={<NewShare />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
