import React from 'react';

const IdCardStyle = {
    display: 'flex',
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '20%',
    border: "thin solid black",
    padding: '10px',
    margin: '10px',
    fontSize: '16px'
}

const IdCardStyleText = {
    marginLeft: '20px',
    textAlign: 'left'
}

const IdCard = (props) => {
    return (
    <div style={IdCardStyle}>
        <img src={props.picture} style={{ width: '200px', height: '200px' }} alt=""/>
        <div style={IdCardStyleText}>
            <p><strong>First name:</strong> {props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
    </div>
    )
}

export default IdCard;