import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="nav nav-tabs flex-row">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Fanart</a>
        <a class="nav-link" href="#">Artists</a>
        <a class="nav-link ms-auto" href="#">Sign In</a>
      </nav>
    </div>
  )
}

export default NavBar;