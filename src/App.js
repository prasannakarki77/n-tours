import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Tooltip, IconButton } from "@mui/material";
import { BsSunFill, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import Blogs from "./pages/Blogs";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    return setDarkMode(!darkMode);
  };
  return (
    <div className="container relative min-h-screen">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>

      <div className="fixed bottom-3 right-3">
        <Tooltip
          title={`${darkMode ? "Light Mode" : "Dark mode"}`}
          placement="top"
          onClick={toggle}
        >
          <IconButton>{darkMode ? <BsSunFill /> : <BsSun />}</IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
