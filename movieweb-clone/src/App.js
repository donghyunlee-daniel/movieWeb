import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
