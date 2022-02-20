import React from 'react'; 
import img13 from './images/13.PNG'
import img14 from './images/14.PNG'
import img15 from './images/15.PNG'
import img16 from './images/16.PNG'
export const Div = () => {
    return (
        <div className='Left'>
            <h1 className='Header'>X.divisé en deux parties :
</h1>
            <img className='image' src ={img13} />
            <img className='image' src ={img14} />
            <img className='image' src ={img15} />
            <img className='image' src ={img16} />
        </div>
    )
}