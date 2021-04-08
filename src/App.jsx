import React from 'react';
// import Time from "./Time.jsx"
import Card from './Card'
import Data from './CardData'


// Array.map(funtion(value, index, workingArray){ defined function here })    ......Syntax of mapping 
const cards = (val) => {
    return (
        <Card img={val.imgsrc} title={val.title} name={val.name} link={val.link} />
    )
}

function App() {
    return (
        <>
            <h4>Top most popular webseries and Movies</h4> {Data.map(cards)}
        </>
    )
}

export default App