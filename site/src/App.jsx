import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";


function App() {
  return <div className="App">
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
