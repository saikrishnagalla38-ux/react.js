import React from 'react'
function Animals(){
 let animals = ['lion', 'tiger', 'bear']
    return (
        <div><ol>{animals.map(animal =>(
            <li>{animal}</li>
        ))}</ol></div>
    )
    }
    
export default Animals