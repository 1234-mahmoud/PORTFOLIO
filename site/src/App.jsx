import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";


function App() {
  return <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Header" element={<Header/>} />
      <Route path="Projects" element={<Projects/>} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
