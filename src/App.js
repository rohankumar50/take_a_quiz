import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ForChildren from "./pages/ForChildren";
import ForChildrenQuiz from "./pages/ForChildrenQuiz";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child" element={<ForChildren />} />
          <Route path="/child/quiz" element={<ForChildrenQuiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
