import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SiteContainer from "./SiteContainer";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  return (
    <div className="container">
      {user ? <NavBar user={user} setUser={setUser} /> : null}
      <h1>Fanart Expo</h1>
      <SiteContainer 
        onLogin={setUser} 
        user={user} 
      />
    </div>
  );
}

export default App;
