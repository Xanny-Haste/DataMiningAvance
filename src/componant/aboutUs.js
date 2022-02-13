import React from "react"
import {Link} from 'react-router-dom'
import './css/aboutUs.css'
import picture from '../Image/1.png'
export const AboutUs = () => {
    return (
        <div className="Ss">
            <h1 className="port">Portfolio</h1>
            <a className="button-per"><img src={picture} className="button-per1" /></a>
            <Link to="/Project" className="button-per2">Student Performance</Link>
        </div>
    )
}