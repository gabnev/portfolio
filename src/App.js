import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SpaceBg from "./components/SpaceBg";
import Title from "./components/Title";
import Menu from "./components/Menu";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const App = () => {

  return (
    <div className="main-container">
      <SpaceBg className="spaceBg" />
      <BrowserRouter>
        <div>
          <Menu />
          <Route path="/" exact component={Title} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;