import { React, useState } from 'react'
import data from "./ListData"


function Data(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input !== '') {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
   
}

export default Data