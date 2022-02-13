import {React, useEffect} from 'react'
import { Navbar } from './componant/navBar';
import { AboutUs } from './componant/aboutUs';
import { GetinTouch } from "./componant/getinTouch";
import { Services } from './componant/services';
import { Portfolio } from './componant/Portfolio';
import './App.css'


function App() {
  useEffect(() => {
    document.title = "RockFiller"
 }, []);
 
  return (
    <div>
      <Navbar />
      <Services />
      <Portfolio />
      <AboutUs />
      <GetinTouch />
    </div>
  );
}

export default App;
