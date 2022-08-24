import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Tooltip, IconButton } from "@mui/material";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import Blogs from "./pages/Blogs";
import Blog from "./components/Blog";
import Tours from "./components/Tours";
import useDarkMode from "./useDarkMode";
import OurTours from "./pages/OurTours";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
const App = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const toggle = () => {
    setTheme(colorTheme);
  };

  return (
    <div className=" relative min-h-screen dark:bg-black transition-all">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/tours" element={<OurTours />} />
          <Route path="/blog-details" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>

      <div className="fixed bottom-3 right-3 p-1 shadow-xl rounded-xl bg-primary">
        <Tooltip
          title={`${colorTheme === "dark" ? "Dark mode" : "Light Mode"}`}
          placement="top"
          onClick={toggle}
        >
          <IconButton>
            {colorTheme === "dark" ? (
              <MdDarkMode className="text-white" />
            ) : (
              <RiSunFill className="text-white" />
            )}
          </IconButton>
        </Tooltip>
      </div>
      <Footer />
    </div>
  );
};

export default App;
