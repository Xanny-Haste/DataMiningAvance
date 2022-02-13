import React from 'react' 
import img2 from './images/3.PNG'
import img3 from './images/4.PNG'
import img4 from './images/5.PNG'
import img5 from './images/6.PNG'
import './css/introduction.css'
export const Dim = () => {
    return (
        <div className='Left'> 
            <h1 className='Header'>VI. Dimention Tables</h1>
            <p className='text'>Dans ce Etape Utilisée Talend Pour Creaté Table dimenstion Dans Base Donnes Qui contient Tables des faits et Table Dimenstion "Base_dim" Base Donnes MySql </p>
            <img src={img2} className='image' />
            <h2 className='Title'>Sortir Etudiant :</h2>
            <img src={img3} className='image' />
            <h2 className='Title'>Sortir Score : </h2>
            <img src={img4} className='image' />
            <h2 className='Title'>Php my Admin</h2>
            <img src={img5} className='image' />
            
        </div>
    )
}