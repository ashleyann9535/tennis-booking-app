import React from "react";
import './Navbar.css'; 

function Navbar() {
    return (
        <div className="Navbar">
            <nav class="navbar ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/tennis-ball.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                     Tennis App
                </a>
            </div>
        </nav>
        </div>
    );
  }

export default Navbar;