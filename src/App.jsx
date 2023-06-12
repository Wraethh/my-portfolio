import "./App.css";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import Presentation from "./components/Presentation";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Presentation />
          <Navbar />
          <div className="empty"></div>
          <div ref={useHorizontalScroll()} className="content">
            <About />
            <Projects />
            <Contact />
          </div>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}
