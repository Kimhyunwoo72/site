import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/page/About";
import Main from "./components/page/Main";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
