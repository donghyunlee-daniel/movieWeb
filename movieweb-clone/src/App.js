import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}`} element={<Home/>}></Route>
        <Route path="/movie/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
