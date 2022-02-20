import React from 'react';
import Img12 from './images/12.PNG';
export const Con = () => {
    return (
        <div className='Left'>
            <h1 className='Header'>
             IX.Convertir la base de données en "csv"
            </h1>
            <p className='text'>
            Devoir ajouter des données pour arriver à "dataframe" bien  
            </p>
            <img src={Img12} className='image' />
            <p className='image-title'> Machine Learning</p>
            <p className='text'>
            Nous utilisons une bibliothèque "sklearn" Pour "Machine Learning"

            </p>
            <p className='text'> a été divisé "dataframe" a Entre deux "Test et Train"</p>
            <p className='text'> 20% Pour Test et 80% Pour Entrainement</p>

        </div>
    )
}