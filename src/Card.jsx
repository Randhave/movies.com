import React from 'react';
import './card.css'
import './CardData'
 
function Card(props) {
    // console.log(props)
    return (
        <>
            <div className='cards'>
                <img src={props.img} alt="load image" className="card_img" />
                <div className='card_info' >
                    <span className='card_category' src={props.name}> </span>
                    <h3>{props.title}</h3>
                    <a href={props.link} target='__blank'>Download </a>
                     

                </div>
            </div>
        </>
    )
}

export default Card