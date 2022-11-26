
import  React from "react"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/About'
import About from './Components/Home';
import Navbar from "./Components/Navbar";
import Qualification from "./Components/Qualification";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/about" element={<Home/>}/>
      <Route path="/qualification" element={<Qualification />}/>
      <Route path="/contact" element={<Contacts />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}
export default App;
