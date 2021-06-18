import React , { useState } from 'react'
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom";

import * as $ from "jquery"
// import './App.css';
// import './component/all csss/style.css'
// import './component/all csss/color.css'
// import './component/all csss/reset.css'   
// import './component/all csss/yourstyle.css' 
// import './component/all csss/plugins.css'
// import './component/all csss/googlefont.css'


import Contact from "./component/Contact";
import Home2 from "./component/home2";
import Nav from "./component/Nav-bar";
// import './component/all csss/style.css';


const App=()=> {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home2} />
        <Route path="/Contact" component={Contact} />
      </Router>
  );
};

export default App;
