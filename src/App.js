import "./App.css";
import Footer from "./components/Footer";
import PresentationFilms from "./components/PresentationFilms";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import Detail from "./components/Detail";
import Navbar from "./header/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<PresentationFilms />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
