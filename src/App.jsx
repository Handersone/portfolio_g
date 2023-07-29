import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Page404, Landingpage, Landingportfolio } from "./pages";
import Formulaire from "./pages/formulaire/Formulaire.jsx";

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
        <Route path="/formulaire" element={<Landingpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
