import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from './components/Nav';
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <GlobalStyle/>
       <Nav/>
       <Routes>
         <Route  path="/" exact element={<AboutUs/>}/>
         <Route path="/work" exact element ={<OurWork/>}/>
         <Route path="/contact" exact element ={<ContactUs/>}/>
       </Routes>
    </div>
  );
}

export default App;
