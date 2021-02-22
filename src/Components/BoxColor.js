import React from 'react'

export default function BoxColor(prop) {
    const color = `rgb(${prop.r},${prop.g},${prop.b})`
    const hexColor = '#'+ 
                    ((Number(prop.r).toString(16).length > 1) ? Number(prop.r).toString(16): ('0' + Number(prop.r).toString(16))) + 
                    ((Number(prop.g).toString(16).length > 1) ? Number(prop.g).toString(16): ('0' + Number(prop.g).toString(16))) + 
                    ((Number(prop.b).toString(16).length > 1) ? Number(prop.b).toString(16): ('0' + Number(prop.b).toString(16)));

    const BoxStyle = {
         backgroundColor: color,
         border: "thin solid black",
         padding: '5px 10px',
         margin: '5px 10px',
         color: 'black'
    }
    return (
        <div style={BoxStyle}>
            <p>{color}</p>
            <p>{hexColor}</p>
        </div>
    )
}
