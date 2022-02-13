import React from "react";
import {Link} from "react-router-dom"
import './css/navBar.css'
export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="LocalNavBar">
            <h1 className="logo">Rock Filler</h1>
  
            </div>
            <div className="Middle-Text">
            <h1 className="h1">Data Analystic</h1>

            <p className="p">Collect, process, analyse and present data - from supporting everyday business decisions to driving global change.</p>
            <a href='https://gmail.com' className="button-blue">get into touch </a>
            </div>
        </div>
    )
}