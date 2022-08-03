import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Feedtime from "./Feedtime";
import Option from "./Option";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/feedtime" element={<Feedtime />} />
        <Route path="/option" element={<Option />} />
      </Routes>
    </Router>
  );
}

export default App;
