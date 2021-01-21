import React from "react"
import './App.css';
import Route from "./components/Route"
import About from "./components/About"
import Careers from "./components/Careers"
import Header from "./components/Header"
import WhatWeDo from "./components/WhatWeDo"
import Insights from "./components/Insights"
import Industries from "./components/Industries"
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/"> 
        <Home/>
      </Route>
       <Route path="/about">
          <About />
       </Route>
       <Route path="/careers">
          <Careers/>
       </Route>
       <Route path="/footer">
          <Footer />
       </Route>
       <Route path="/industries">
          <Industries/>
       </Route>
       <Route path="/insights">
          <Insights/>
       </Route>
       <Route path="/whatwedo">
          <WhatWeDo/>
       </Route>
      
    </div>
  );
}

export default App;
