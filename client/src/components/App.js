// import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SiteContainer from "./SiteContainer";

function App() {
  const [user, setUser] = useState(null);
  console.log("user", user);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  return (
    <div>
      <NavBar user={user} />
      <SiteContainer onLogin={setUser} user={user} />
    </div>
    // <BrowserRouter>
    
    //   <div className="App">
    //     <Switch>
    //       <Route path="/testing">
    //         {/* <h1>Test Route</h1> */}
    //       </Route>
    //       <Route path="/">
            
    //         {/* <h1>Page Count: {count}</h1> */}
    //       </Route>
    //       <Route path="/login">
    //         <Login onLogin={setUser} />
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
