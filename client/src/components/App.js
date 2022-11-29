// import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, [])
  return (
    <BrowserRouter>
    <NavBar />
      <div className="App">
        <Switch>
          <Route path="/testing">
            {/* <h1>Test Route</h1> */}
          </Route>
          <Route path="/">
            
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
