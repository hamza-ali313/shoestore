import React from 'react'
import Home from "./Home.js"
import Shoes from "./Shoes.js"
import About from "./About.js"

import { BrowserRouter as Router,Routes ,Route,Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
       <Router>
         <nav>
           <Link to="/">Home</Link>
           <Link to="/Shoes">Shoes</Link>
           <Link to="/About">About</Link>
          
         </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shoes" element={<Shoes/>}/>
          <Route path="/About" element={<About/>}/>
        
        </Routes>
      </Router>
      
      
    </div>
  )
}



export default App

