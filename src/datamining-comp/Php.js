import React from 'react' 
import './css/introduction.css'
import img6 from './images/7.PNG'
import img7 from './images/8.PNG'
import img8 from './images/9.PNG'
import img9 from './images/10.PNG'
export const Fact = () => {
    return (
        <div className='Left'>
            <h1 className='Header'>VII. Fact Table</h1>
            <p className='text'>Dans ce Etape Utilisée Talend Pour Creaté Table Fact Dans Base Donnes Qui contient Tables des faits et Table Dimenstion "Base_dim"</p>
            <img src={img6}  className='image'/>
            <h2 className='Title'>Php My Admin</h2>
            <img src={img8} className='image' />  
        </div>
    )
}