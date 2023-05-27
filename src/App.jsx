import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import Presentation from "./components/Presentation";

export default function App() {
  return (
    <>
      <Presentation />
      <Navbar />
      <div className="empty"></div>
      <div ref={useHorizontalScroll()} className="content">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
