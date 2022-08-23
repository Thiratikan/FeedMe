import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Feedtime from "./Feedtime";
import FullMenu from "./FullMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/feedtime" element={<Feedtime />} />
        <Route path="/FullMenu" element={<FullMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
