import {React} from "react";
import './css/getintoTouch.css'
import gmail from '../Image/4.png'
import twitter from '../Image/3.png'
import ins from '../Image/2.png'

export const GetinTouch = () => {
    return (
        <div>
            <h1 className="title">Get in touch</h1>
            <p className="Main-text">Send us a message and we'll get back to you as soon as possible </p>
            <div className="images">
                <img src={gmail} width="75"/>
                <img src={twitter} width="75"/>
                <img src={ins} width="75" />
            </div>
        </div>
    )
}

