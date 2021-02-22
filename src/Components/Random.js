import React from 'react'

const RandomStyle = {
    border: "thin solid black",
    textAlign: 'left',
    padding: '5px 10px',
    margin: '5px 10px'
}

export default function Random(props) {
    const random = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div style={RandomStyle}>
            <p>Random value between {props.min} and {props.max} is {random}</p>
        </div>
    )
}
