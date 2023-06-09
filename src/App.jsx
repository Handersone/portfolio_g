import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Page404, Landingpage, Landingportfolio } from "./pages";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/portfolio" element={<Landingportfolio />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
