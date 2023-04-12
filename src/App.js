import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from './images/about.png'
import aboutimage1 from './images/download.png';



import Contact from "./Components/Contact";

function App() {
  return (
   <div>
     <Header/>
     <Feature/>
     <About image={aboutimage} title='Comes with all you Need for daily Life'  button='Get Your app'  />
     <Presentation/>
     <About image={aboutimage1} title='Downlaod Now'  button='Click Me'  />
     
      <Contact/>
   </div>
  )
  ;
}

export default App;
